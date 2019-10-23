package lceasy

import (
	"strings"
)

// 1108. Defanging an IP Address
func defangIPaddr(address string) string {
    return strings.Join(strings.Split(address, "."), "[.]")
}