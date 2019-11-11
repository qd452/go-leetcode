package lc1254

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

type question struct {
	para
	ans
}

type para struct {
	s1 [][]int
}

type ans struct {
	one int
}

func Test_Problem0087(t *testing.T) {
	ast := assert.New(t)

	qs := []question{

		question{
			para{
				[][]int{
					{1, 1, 1, 1, 1, 1, 1, 0},
					{1, 0, 0, 0, 0, 1, 1, 0},
					{1, 0, 1, 0, 1, 1, 1, 0},
					{1, 0, 0, 0, 0, 1, 0, 1},
					{1, 1, 1, 1, 1, 1, 1, 0}},
			},
			ans{2},
		},
		question{
			para{
				[][]int{
					{0, 0, 1, 0, 0},
					{0, 1, 0, 1, 0},
					{0, 1, 1, 1, 0}},
			},
			ans{1},
		},
		question{
			para{
				[][]int{
					{1, 1, 1, 1, 1, 1, 1},
					{1, 0, 0, 0, 0, 0, 1},
					{1, 0, 1, 1, 1, 0, 1},
					{1, 0, 1, 0, 1, 0, 1},
					{1, 0, 1, 1, 1, 0, 1},
					{1, 0, 0, 0, 0, 0, 1},
					{1, 1, 1, 1, 1, 1, 1}},
			},
			ans{2},
		},
	}

	for _, q := range qs {
		a, p := q.ans, q.para
		fmt.Printf("~~%v~~\n", p)

		ast.Equal(a.one, closedIsland(p.s1), "input:%v", p)
	}
}
