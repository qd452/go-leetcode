class Solution {
public:
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        int m = mat.size(), n = mat[0].size();
        long prefix[m+1][n+1] = {0};
        int ans = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                prefix[i+1][j+1] = mat[i][j] + prefix[i+1][j] + prefix[i][j+1] - prefix[i][j];
            }
        }
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int lo = 0, hi = min(m - i, n - j);
                while (lo < hi) {
                    int mid = (lo + hi) / 2;
                    if (prefix[i+mid+1][j+mid+1] - prefix[i+mid+1][j] - prefix[i][j+mid+1] + prefix[i][j] <= threshold) {
                        lo = mid + 1;
                    } else {
                        hi = mid;
                    }
                }
                ans = max(ans, lo);
            }
        }
        
        return ans;
    }
};