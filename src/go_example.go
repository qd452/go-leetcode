package main

import (
	"strings"
	"fmt"
	"sort"
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

func main() {
	s := "great"
	s2 := "rgeat"
	rslt := strings.Compare(s, s2)
	fmt.Println(s)
	sl1, sl2 := s[2:], s2[2:]
	rslt2 := strings.Compare(sl1, sl2)
	fmt.Println(rslt, rslt2, len(s))
	sorted := strings.Split(s2, "")
	sort.Strings(sorted)
	fmt.Println(sorted)
	s2 = strings.Join(sorted, "")
	fmt.Println(s2)

	// This example inserts several ints into an IntHeap, checks the minimum,
	// and removes them in order of priority.
	// h := &IntHeap{2, 1, 5}
	h := &IntHeap{2,1,5}
	fmt.Println((*h)[0]) // NOTE!!!
	heap.Init(h)
	heap.Push(h, 3)
	fmt.Printf("minimum: %d\n", (*h)[0])
	for h.Len() > 0 {
		fmt.Printf("%d ", heap.Pop(h))
	}

	// explore char and int 
	a := 97
	tmp := byte(a)
	ss := "abce"
	for i:=0;i<len(ss);i++ {
		fmt.Println("ss ", i, "is", ss[i])
	}
	fmt.Println("tmp is ", tmp)

}