package lc1250

func isGoodArray(nums []int) bool {
	gcdReduce := 0
	for _, n := range nums {
		gcdReduce = gcd(n, gcdReduce)
	}
	return gcdReduce == 1
}

func gcdRecusive(a, b int) int {
	if b == 0 {
		return a
	}
	return gcdRecusive(b, a%b)
}

func gcd(x int, y int) int {
	if x == 0 {
		return y
	}
	for y != 0 {
		x, y = y, x%y
	}
	return x
}
