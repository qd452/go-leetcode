package lc1255

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
	s1 []string
	s2 []byte
	s3 []int
}

type ans struct {
	one int
}

func Test_Problem0087(t *testing.T) {
	ast := assert.New(t)

	qs := []question{

		question{
			para{
				[]string{"dog", "cat", "dad", "good"},
				[]byte{'a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'},
				[]int{1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
			},
			ans{23},
		},

	}

	for _, q := range qs {
		a, p := q.ans, q.para
		fmt.Printf("~~%v~~\n", p)

		ast.Equal(a.one, maxScoreWords(p.s1, p.s2, p.s3), "input:%v", p)
		ast.Equal(a.one, maxScoreWordsFaster(p.s1, p.s2, p.s3), "input:%v", p)
	}
}
