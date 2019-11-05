package lc1249

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

type question struct {
	para
	ans
}

// para 是参数
// one 代表第一个参数
type para struct {
	one string
}

// ans 是答案
// one 代表第一个答案
type ans struct {
	one string
}

func Test_Problem1249(t *testing.T) {
	ast := assert.New(t)

	qs := []question{
		question{
			para{"lee(t(c)o)de)"},
			ans{"lee(t(c)o)de"},
		},
		question{
			para{"a)b(c)d"},
			ans{"ab(c)d"},
		},
		question{
			para{"(a(b(c)d)"},
			ans{"a(b(c)d)"},
		},
		question{
			para{"))(("},
			ans{""},
		},
	}

	for _, q := range qs {
		a, p := q.ans, q.para
		fmt.Printf("~~%v~~\n", p)

		ast.Equal(a.one, minRemoveToMakeValid(p.one), "输入:%v", p)
		ast.Equal(a.one, minRemoveToMakeValidMySlow(p.one), "输入:%v", p)
	}
}
