package lc87

import (
	"sort"
	"strings"
)

func sorted(s string) string {
	sli := strings.Split(s, "")
	sort.Strings(sli)
	return strings.Join(sli, "")
}

func isScramble(s1 string, s2 string) bool {
	m, n := len(s1), len(s2)
	if m != n || sorted(s1) != sorted(s2) {
		return false
	}
	if m < 4 || strings.Compare(s1, s2) == 0 {
		return true
	}
	for i := 1; i < m; i++ {
		if isScramble(s1[:i], s2[:i]) && isScramble(s1[i:], s2[i:]) ||
			isScramble(s1[:i], s2[m-i:]) && isScramble(s1[i:], s2[:m-i]) {
			return true
		}
	}

	return false
}

func isScrambleFast(s1 string, s2 string) bool {
	if s1 == s2 {
		return true
	}
	if len(s1) != len(s2) {
		return false
	}
	chars := make([]int, 26)
	for i := 0; i < len(s1); i++ {
		chars[int(s1[i]-'a')]++
		chars[int(s2[i]-'a')]--
	}
	for _, v := range chars {
		if v != 0 {
			return false
		}
	}
	for i := 1; i < len(s1); i++ {
		if (isScrambleFast(s1[:i], s2[len(s2)-i:]) && isScrambleFast(s1[i:], s2[:len(s2)-i])) ||
			(isScrambleFast(s1[:i], s2[:i]) && isScrambleFast(s1[i:], s2[i:])) {
			return true
		}
	}
	return false
}
