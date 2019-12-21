// you can use includes, for example:
// #include <algorithm>

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;
#include <unordered_set>
#include <algorithm>
#include <vector>
#include <assert.h>
#include <iostream>

using namespace std;

class Solution {
public:
    int firstMissingPositive(vector<int>& A) {
        // write your code in C++14 (g++ 6.2.0)
        if (A.size() == 0) return 1;
        unordered_set<int> s(A.begin(), A.end());
        int m = *max_element(A.begin(), A.end());
        if (m > 0) {
            for (int i = 1; i < m; ++i) {
                auto it = s.find(i);
                if (it == s.end()) {
                    return i;
                }
            }
            return m + 1;
        } else {
            return 1;
        }
    }
};

int main () {
    Solution s;
    int ans;
    vector<int> A = {1,2,3,5,6,7};

    ans = s.firstMissingPositive(A);
    assert (ans == 4);
    A = {};
    ans = s.firstMissingPositive(A);
    cout << "ans is " << ans << endl;
    assert (ans == 1);

    return 0;
}