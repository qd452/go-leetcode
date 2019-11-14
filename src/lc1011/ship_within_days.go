package lc1011

func shipWithinDays(weights []int, D int) int {
	lo, hi := 0, 0
	for _, w := range weights {
		hi += w
		if w > lo {
			lo = w
		}
	}
	mid := 0
	for lo < hi {
		mid = (lo + hi) / 2
		if check(mid, weights, D) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}

func check(cap int, weights []int, D int) bool {
	days, cum := 1, 0
	for _, v := range weights {
		cum += v
		if cum > cap {
			days++
			cum = v
		}
		if days > D {
			return false
		}
	}
	return days <= D
}
