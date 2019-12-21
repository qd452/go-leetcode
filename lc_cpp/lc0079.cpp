class Solution {
public:
    vector<pair<int, int>> directions{{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        int l = word.size();
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                set<pair<int, int>> visited;
                if (dfs(i, j, 0, l, board, word, visited)) {
                    return true;
                }
            }  
        }
        return false;
    }
    
    bool dfs(int i, int j, int start, int l, vector<vector<char>>& board, string word, set<pair<int, int>>& visited) {
        int m = board.size(), n = board[0].size();
        pair<int, int> ij(i, j);
        if (board[i][j] != word[start] || visited.count(ij))
            return false;
        if (start == l - 1)
            return true;
        
        visited.insert(ij);
        bool ok = false;
        for (auto& d : directions) {
            int dx = d.first, dy = d.second;
            int xx = i + dx, yy = j + dy;
            if (0 <= xx && xx < m && 0<= yy && yy < n)
                ok = ok || dfs(xx, yy, start+1, l, board, word, visited); // NOTE: here must use ok = ok ||
        }
        visited.erase(ij);
        return ok;
    }
};