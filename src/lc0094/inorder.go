package lc0094

// TreeNode definition
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversalM1(root *TreeNode) []int {
	var rslt []int // declaring empty slices
	inOrder(root, &rslt)
	return rslt

}

func inOrder(root *TreeNode, rslt *[]int) {
	if root != nil {
		inOrder(root.Left, rslt)
		*rslt = append(*rslt, root.Val)
		inOrder(root.Right, rslt)
	}
}

func inorderTraversalM2(root *TreeNode) []int {
	var result []int
	return helper(root, result)
}
func helper(root *TreeNode, result []int) []int {
	if root == nil {
		return result
	}
	result = helper(root.Left, result)
	result = append(result, root.Val)
	result = helper(root.Right, result)
	return result
}

func inorderTraversal(root *TreeNode) []int {
	var rslt []int
	if root != nil {
		rslt = append(rslt, inorderTraversal(root.Left)...)
		rslt = append(rslt, root.Val)
		rslt = append(rslt, inorderTraversal(root.Right)...)
	}
	return rslt

}

func inorderTraversalIterative(root *TreeNode) []int {
	cur := root
	var stack []*TreeNode
	var ans []int
	for cur != nil || len(stack) > 0 {
		for cur != nil {
			stack = append(stack, cur)
			cur = cur.Left
		}
		// Below two line: cur = stack.pop()
		cur = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		ans = append(ans, cur.Val)
		cur = cur.Right
	}

	return ans
}
