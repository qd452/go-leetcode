package lc1253

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
	s1 int
	s2 int
	s3 []int
}

type ans struct {
	one [][]int
}

func Test_Problem0087(t *testing.T) {
	ast := assert.New(t)

	qs := []question{

		question{
			para{
				2,
				1,
				[]int{1, 1, 1},
			},
			ans{
				[][]int{{1, 1, 0}, {0, 0, 1}},
			},
		},

		// question{
		// 	para{
		// 		5,
		// 		5,
		// 		[]int{2, 1, 2, 0, 1, 0, 1, 2, 0, 1},
		// 	},
		// 	ans{
		// 		[][]int{{1, 1, 1, 0, 1, 0, 0, 1, 0, 0},
		// 			{1, 0, 1, 0, 0, 0, 1, 1, 0, 1}},
		// 	},
		// },
	}

	for _, q := range qs {
		a, p := q.ans, q.para
		fmt.Printf("~~%v~~\n", p)

		ast.Equal(a.one, reconstructMatrix(p.s1, p.s2, p.s3), "input:%v", p)
	}
}
