package lc1253

func reconstructMatrix(upper int, lower int, colsum []int) [][]int {
	r, c := 2, len(colsum)
	ans := make([][]int, r)
	for i := range ans {
		ans[i] = make([]int, c)
	}
	for j := 0; j < c; j++ {
		if colsum[j] == 2 {
			ans[0][j], ans[1][j] = 1, 1
			upper--
			lower--

		} else if colsum[j] == 1 {
			if upper >= lower {
				ans[0][j], ans[1][j] = 1, 0
				upper--
			} else {
				ans[0][j], ans[1][j] = 0, 1
				lower--
			}
		}
	}
	if lower == 0 && upper == 0 {
		return ans
	}
	return [][]int{}
}
