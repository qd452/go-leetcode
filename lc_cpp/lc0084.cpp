class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        heights.push_back(0);
        stack<int> stack;
        int ans = 0;
        
        for (int i = 0; i < heights.size(); ++i) {
            while (stack.size() > 0 && heights[stack.top()] > heights[i]) {
                int maxH = heights[stack.top()];
                stack.pop();
                int leftIdx = stack.size() ? stack.top() : -1;
                ans = max(ans, maxH * (i - leftIdx - 1));
            }
            stack.push(i);
        }
        
        return ans;
    }
};