/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        stack<TreeNode *> stk;
        vector<int> ans;
        
        while (root || !stk.empty()) {
            while (root) {
                stk.push(root);
                root = root -> left;
            }
            root = stk.top();
            stk.pop();
            ans.push_back(root -> val);
            root = root -> right;
        }
        
        return ans;
    }
    
    vector<int> inorderTraversal_(TreeNode* root) {
        vector<int> ans;
        inOrder(root, ans);
        return ans;   
    }
    
    void inOrder(TreeNode* root, vector<int>& ans) {
        if (!root)
            return;
        inOrder(root -> left, ans);
        ans.push_back(root -> val);
        inOrder(root -> right, ans);
    }
};