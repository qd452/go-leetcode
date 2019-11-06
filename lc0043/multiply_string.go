package lc0043

import (
	"math/big"
)

func multiply(num1 string, num2 string) string {
    // i1, _ := strconv.Atoi(num1)
    // i2, _ := strconv.Atoi(num2)
    // big1 := big.NewInt(int64(i1))
    // big2 := big.NewInt(int64(i2))
    big1, _ := new(big.Int).SetString(num1, 0)
    big2, _ := new(big.Int).SetString(num2, 0)
    // fmt.Println(big1, big2)
    big1.Mul(big1, big2)
    return big1.String()
}