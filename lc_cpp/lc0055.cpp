class Solution {
public:
    bool canJump(vector<int>& nums) {
        int l = nums.size();
        int maxReach = 0;
        for (int i = 0; i < l; ++i) {
            int maxLimit = min(i + nums[i], l - 1);
            if (i <= maxReach) {
                maxReach = max(maxReach, maxLimit);
            }
        }
        return maxReach == l - 1;
    }
};