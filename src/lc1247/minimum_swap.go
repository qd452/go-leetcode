package lc1247

func minimumSwap(s1 string, s2 string) int {
	x, y := 0, 0
	for i := range s1 {
		if s1[i] != s2[i] {
			if s1[i] == 'x' {
				x++
			} else {
				y++
			}
		}
	}

	if (x+y)%2 != 0 {
		return -1
	}

	// xx, yy needs one swap, and xy yx needs two swaps, so find the pair of x and the number of redundant x
	return x/2 + y/2 + 2*(x%2)
}
