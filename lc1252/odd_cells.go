package lc1252

func oddCells(n int, m int, indices [][]int) int {
	A := make([][]int, n)
	for i := range(A) {
		A[i] = make([]int, m)
	}
	for _, idx := range indices {
		r, c := idx[0], idx[1]
		for rr := 0; rr < n; rr++ {
			A[rr][c] ^= 1
		}
		for cc := 0; cc < m; cc++ {
			A[r][cc] ^= 1
		}
	}

	ans := 0
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			ans += A[i][j]
		}
	}

	return ans
}
