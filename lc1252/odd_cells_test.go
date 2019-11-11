package lc1252

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
	s3 [][]int
}

type ans struct {
	one int
}

func Test_Problem0087(t *testing.T) {
	ast := assert.New(t)

	qs := []question{

		question{
			para{
				2,
				3,
				[][]int{{0, 1}, {1, 1}}, // note
			},
			ans{
				6,
			},
		},

		question{
			para{
				2,
				2,
				[][]int{{1, 1}, {0, 0}}, // note
			},
			ans{
				0,
			},
		},
	}

	for _, q := range qs {
		a, p := q.ans, q.para
		fmt.Printf("~~%v~~\n", p)

		ast.Equal(a.one, oddCells(p.s1, p.s2, p.s3), "input:%v", p)
	}
}
