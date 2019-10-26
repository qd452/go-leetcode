package lceasy

import (
	"strings"
)

// 1108. Defanging an IP Address
func defangIPaddr(address string) string {
	return strings.Join(strings.Split(address, "."), "[.]")
}

// 938. Range Sum of BST

// TreeNode definition
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func rangeSumBSTSlow(root *TreeNode, L int, R int) int {
	var sum int
	dfs(&sum, root, L, R)
	return sum
}

func dfs(sum *int, root *TreeNode, L int, R int) {
	if root == nil {
		return
	}
	dfs(sum, root.Left, L, R)
	if L <= root.Val && root.Val <= R {
		*sum += root.Val
	}
	dfs(sum, root.Right, L, R)
}

func rangeSumBST(root *TreeNode, L int, R int) int {
	if root == nil {
		return 0
	}
	sum := 0
	if root.Val >= L && root.Val <= R {
		sum += root.Val
	}
	if root.Val > L {
		sum += rangeSumBST(root.Left, L, R)
	}
	if root.Val < R {
		sum += rangeSumBST(root.Right, L, R)
	}

	return sum

}

// 701. Insert into a Binary Search Tree
func insertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return &TreeNode{val, nil, nil}
		// return &TreeNode{Val: val}
		// root = &TreeNode{val, nil, nil}
	}

	if root.Val < val {
		root.Right = insertIntoBST(root.Right, val)
	}
	if root.Val > val {
		root.Left = insertIntoBST(root.Left, val)
	}

	return root
}
