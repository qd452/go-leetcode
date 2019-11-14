package lc0206

import (
	"util"
)

// ListNode - linked list node struct
type ListNode = util.ListNode

// ListNode - Definition for singly-linked list.
// type ListNode struct {
//      Val int
//      Next *ListNode
//  }

func reverseListIterative(head *ListNode) *ListNode {
	// prev := &ListNode{} // not nil
	var prev *ListNode
	for head != nil {
		tmp := head.Next
		head.Next = prev
		prev = head
		head = tmp
	}
	return prev
}

func reverseList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	p := reverseList(head.Next)
	head.Next.Next = head
	head.Next = nil
	return p
}
