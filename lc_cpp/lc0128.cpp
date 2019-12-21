class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        set<int> s(nums.begin(), nums.end());
        int ans = 0;
        for (int n : s) {
            // cout << n << endl;
            if (!s.count(n - 1)) {
                int y = n - 1;
                int cnt = 0;
                while (s.count(y + 1)) {
                    cnt++;
                    y++;
                    ans = max(ans, cnt);
                }
            }
        }
        
        return ans;
    }
};