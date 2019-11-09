package lc0114

// TreeNode - Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// beats 81%
func flatten(root *TreeNode) {
	var prev *TreeNode
	helper(root, &prev)
}

func helper(root *TreeNode, prev **TreeNode) {
	if root != nil {
		helper(root.Right, prev)
		helper(root.Left, prev)
		root.Right = *prev
		root.Left = nil
		*prev = root
	}
}

// 4ms beats 80%
func flattenIterative(root *TreeNode) {
	prevNode := &TreeNode{Val: -1}
	prev := &prevNode
	stack := []*TreeNode{root}
	for len(stack) > 0 {
		node := stack[len(stack)-1]
		// fmt.Println(node.Val, (*prev).Val)
		stack = stack[:len(stack)-1]
		(*prev).Right = node
		(*prev).Left = nil
		if node != nil && node.Right != nil {
			stack = append(stack, node.Right)
		}
		if node != nil && node.Left != nil {
			stack = append(stack, node.Left)
		}
		*prev = node
	}
}
