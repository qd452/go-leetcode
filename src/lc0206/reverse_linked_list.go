package lc0206

import (
	"util"
)

type ListNode = util.ListNode


// ListNode - Definition for singly-linked list.
// type ListNode struct {
//      Val int
//      Next *ListNode
//  }

func reverseList(head *ListNode) *ListNode {
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