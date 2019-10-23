package lc69

func mySqrt(x int) int {
	lo, hi := 0, x/2+1
	mid := (lo + hi) / 2
	for lo < hi {
		if mid*mid <= x && (mid+1)*(mid+1) > x {
			return mid
		} else if mid*mid > x {
			hi = mid
		} else {
			lo = mid + 1
		}
		mid = (lo + hi) / 2
	}
	return mid
}
