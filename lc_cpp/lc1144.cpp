#include <iostream>
#include <vector>
#include <set>
#include <queue>
using namespace std;

template<class A>void print(A a){for(auto vv:a){cout<<vv<<' ';}cout<<'\n';}

class Solution {
public:
    int movesToMakeZigzag(vector<int>& nums) {
        // vector<int> ans(2, 0);
        int ans[2] = {0, 0};
        int left, right, INF = 1001, n = nums.size();

        for (int i = 0; i < n; ++i) {
            left = i - 1 < 0 ? INF : nums[i - 1];
            right = i + 1 >= n ? INF : nums[i + 1];
            ans[i%2] += max(nums[i] - min(left, right) + 1, 0);
        }

        return min(ans[0], ans[1]);
    }
};

int main () {
    Solution s;
    int ans;
    vector<int> A = {1,2,3};

    ans = s.movesToMakeZigzag(A);
    assert (ans == 2);
    A = {9,6,1,6,2};
    print(A);
    ans = s.movesToMakeZigzag(A);
    cout << ans << endl;
    assert (ans == 4);

    return 0;
}