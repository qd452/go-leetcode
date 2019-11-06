package lc0706faster

// SIZE - the capacity of the hashmap
const SIZE = 10000

func hashFunc(key int) int {
	return key % SIZE
}

// MyHashMap -  a struct
type MyHashMap struct {
	HMap [SIZE]*element
}

type element struct {
	Key, Val int
	Next     *element
}

// Constructor - Initialize your data structure here
func Constructor() MyHashMap {
	return MyHashMap{}
}

// Put - value will always be non-negative.
func (hm *MyHashMap) Put(key int, value int) {
	idx := hashFunc(key)

	for cur := hm.HMap[idx]; cur != nil; cur = cur.Next {
		if cur.Key == key {
			cur.Val = value
			return
		}
	}

	// note: here we always add the new element at the head, not tail
	newNode := &element{Key: key, Val: value}
	newNode.Next = hm.HMap[idx]
	hm.HMap[idx] = newNode

}

// Get - Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
func (hm *MyHashMap) Get(key int) int {
	idx := hashFunc(key)
	for cur := hm.HMap[idx]; cur != nil; cur = cur.Next {
		if cur.Key == key {
			return cur.Val
		}
	}

	return -1
}

// Remove the mapping of the specified value key if this map contains a mapping for the key */
func (hm *MyHashMap) Remove(key int) {
	idx := hashFunc(key)
	cur := hm.HMap[idx]
	if cur != nil {
		if cur.Key == key {
			hm.HMap[idx] = cur.Next
		} else {
			prev := hm.HMap[idx]
			for cur = prev.Next; cur != nil; prev, cur = cur, cur.Next {
				if cur.Key == key {
					prev.Next = cur.Next
					break
				}

			}
		}
	}
}
