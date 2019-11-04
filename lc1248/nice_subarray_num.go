package lc1248

func numberOfSubarrays(nums []int, k int) int {
	var odds []int
	odds = append(odds, -1)
	for i, n := range nums {
		if n%2 == 1 {
			odds = append(odds, i)
		}
	}
	odds = append(odds, len(nums))
	ans := 0
	for i := 1; i < len(odds)-k; i++ {
		ans += (odds[i] - odds[i-1]) * (odds[i+k] - odds[i+k-1])
	}
	return ans
}
