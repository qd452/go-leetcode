package lc0706

// MyHashMap -  a struct
type MyHashMap struct {
	HMap []*HMListNode
}

// HMListNode - the linked list node
type HMListNode struct {
	Key  int
	Val  int
	Next *HMListNode
}

// Constructor - Initialize your data structure here
func Constructor() MyHashMap {
	hm := new(MyHashMap)
	capacity := 10000
	hm.HMap = make([]*HMListNode, capacity)
	return *hm
}

// Put - value will always be non-negative.
func (hm *MyHashMap) Put(key int, value int) {
	l := len(hm.HMap)
	idx := key % l
	if hm.HMap[idx] == nil {
		hm.HMap[idx] = &HMListNode{key, value, nil}
	} else {
		cur, prev := hm.HMap[idx], &HMListNode{Next: hm.HMap[idx]}
		for cur != nil {
			if cur.Key == key {
				cur.Val = value
				return
			}
			prev, cur = cur, cur.Next
		}
		prev.Next = &HMListNode{key, value, nil}
	}

}

// Get - Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
func (hm *MyHashMap) Get(key int) int {
	l := len(hm.HMap)
	idx := key % l
	cur := hm.HMap[idx]
	for cur != nil {
		if cur.Key == key {
			return cur.Val
		}
		cur = cur.Next
	}
	return -1
}

// Remove the mapping of the specified value key if this map contains a mapping for the key */
func (hm *MyHashMap) Remove(key int) {
	idx := key % len(hm.HMap)
	cur, prev := hm.HMap[idx], &HMListNode{Next: hm.HMap[idx]}
	for cur != nil {
		if cur.Key == key {
			if cur == hm.HMap[idx] {
				hm.HMap[idx] = cur.Next
			} else {
				prev.Next = cur.Next
			}
			break
		}
		prev, cur = cur, cur.Next
	}

}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Put(key,value);
 * param_2 := obj.Get(key);
 * obj.Remove(key);
 */
