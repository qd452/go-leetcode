package main

import (
	"strings"
	"fmt"
	"sort"
)

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
}