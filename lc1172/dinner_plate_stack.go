package lc1172

import (
	"container/heap"
)

// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

// Push - heappush
func (h *IntHeap) Push(x interface{}) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

// Pop - heappop
func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

// DinnerPlates - the dinner plates struct
type DinnerPlates struct {
	c int
	// a heap records lef more unfilled stack index
	q IntHeap // NOTE
	// stacks
	stacks [][]int
}

// Constructor - to make init the class
func Constructor(capacity int) DinnerPlates {
	return DinnerPlates{c: capacity}
}

// Push - push into dinner plates
func (dp *DinnerPlates) Push(val int) {
	// NOTE below regading the pointer stuffs
	for dp.q.Len() > 0 && dp.q[0] < len(dp.stacks) && len(dp.stacks[dp.q[0]]) == dp.c {
		heap.Pop(&dp.q)
	}

	if dp.q.Len() == 0 {
		heap.Push(&dp.q, len(dp.stacks))
	}
	if dp.q[0] == len(dp.stacks) {
		dp.stacks = append(dp.stacks, []int{})
	}
	dp.stacks[dp.q[0]] = append(dp.stacks[dp.q[0]], val)
}

// Pop - pop
func (dp *DinnerPlates) Pop() int {
	for len(dp.stacks) > 0 && len(dp.stacks[len(dp.stacks)-1]) == 0 {
		dp.stacks = dp.stacks[:len(dp.stacks)-1]
	}
	return dp.PopAtStack(len(dp.stacks) - 1)
}

// PopAtStack - PopAtStack
func (dp *DinnerPlates) PopAtStack(index int) int {
	if 0 <= index && index < len(dp.stacks) && len(dp.stacks[index]) > 0 {
		heap.Push(&dp.q, index)
		toPop := &dp.stacks[index]
		r := (*toPop)[len(*toPop)-1]
		*toPop = (*toPop)[:len(*toPop)-1]
		return r
	}
	return -1
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * obj.Push(val);
 * param_2 := obj.Pop();
 * param_3 := obj.PopAtStack(index);
 */
