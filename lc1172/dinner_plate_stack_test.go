package lc1172

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_myFunc(t *testing.T) {
	ast := assert.New(t)

	D := Constructor(2)
	D.Push(1)
	D.Push(2)
	D.Push(3)
	D.Push(4)
	D.Push(5)
	ast.Equal(D.PopAtStack(0), 2)
	D.Push(20)
	D.Push(21)
	ast.Equal(D.PopAtStack(0), 20)
	ast.Equal(D.PopAtStack(2), 21)
	ast.Equal(D.Pop(), 5)
	ast.Equal(D.Pop(), 4)
	ast.Equal(D.Pop(), 3)
	ast.Equal(D.Pop(), 1)
	ast.Equal(D.Pop(), -1)

	D = Constructor(1)
	D.Push(1)
	D.Push(2)
	D.Push(3)
	ast.Equal(D.PopAtStack(1), 2)
	ast.Equal(D.Pop(), 3)
	r := D.Pop()
	ast.Equal(r, 1)
}
