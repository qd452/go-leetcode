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
    int maxDepth(TreeNode* root) {
        if (root == NULL) return 0;
        int ans = 0;
        queue<TreeNode *> q;
        q.push(root);
        
        while (!q.empty()) {
            ans++; //
            
            for (int i = 0, n = q.size(); i < n; ++i) { // note: n is fixed before the iteration
                TreeNode* node = q.front();
                q.pop();

                if (node -> left != NULL) 
                    q.push(node -> left);
                if (node -> right != NULL) 
                    q.push(node -> right);
            }
            
        }
        
        return ans;
    }
};