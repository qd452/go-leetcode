class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int k) {
        int m = grid.size(), n = grid[0].size();
        if (m == 1 && n == 1)
            return 0;
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        map<pair<int, int>, int> visited;
        set<vector<int>> cur;
        int step = 0;
        
        cur.insert({0, 0, k});
        visited[{0, 0}] = k;
        
        while (cur.size()) {
            set<vector<int>> tmp;
            step++;
            for (auto& it : cur) {
                int x = it[0], y = it[1], remainK = it[2];
                for(auto& dir : directions) {
                    int xx = x + dir[0], yy = y + dir[1];
                    if (0 <= xx && xx < m && 0 <= yy && yy < n) {
                        int newK = remainK - grid[xx][yy];
                        if (newK >= 0) {
                            if (xx == m - 1 && yy == n - 1) {
                                return step;
                            } else if (!visited.count({xx, yy})) {
                                visited[{xx, yy}] = newK;
                                tmp.insert({xx, yy, newK});
                            } else if (visited.count({xx, yy}) && newK > visited[{xx, yy}]) {
                                visited[{xx, yy}] = newK;
                                tmp.insert({xx, yy, newK});
                            }
                        }
                    }
                }
            }
            cur = tmp;
        }
        
        return -1;
    }
};