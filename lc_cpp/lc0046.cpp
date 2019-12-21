#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>  // for swap
#include "assert.h"

using namespace std;

class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        helper(0, nums, ans);
        return ans;    
    }
    
    void helper(int start, vector<int>& nums, vector<vector<int>>& ans) {
        if (start == nums.size() - 1) {
            ans.push_back(nums);
        } else {
            for (int i = start; i < nums.size(); ++i) {
                swap(nums[i], nums[start]);
                helper(start + 1, nums, ans);
                swap(nums[i], nums[start]);
            }
        }
    }
};

int main () {
    Solution s;
    vector<vector<int>> ans;
    vector<int> nums = {1,2,3};

    ans = s.permute(nums);
    // for (auto a : ans) {
    //     cout << '{';
    //     for (auto v : a) {
    //         cout << v << ", ";
    //     }
    //     cout << "}, ";
    // }
    vector<vector<int>> expected = {{1, 2, 3, }, {1, 3, 2, }, {2, 1, 3, }, {2, 3, 1, }, {3, 2, 1, }, {3, 1, 2}};
    assert (ans == expected);

    return 0;
}