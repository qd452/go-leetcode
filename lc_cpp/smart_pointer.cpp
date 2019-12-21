#include<iostream> 
using namespace std; 
  
template<class T>
class SmartPtr {
  T *ptr;
public:
  explicit SmartPtr(T *p = NULL) {
    ptr = p;
  }

  ~SmartPtr() {
    delete ptr;
  }

  // overloading dereferencing operator
  T & operator * () {
    return *ptr;
  }

  // overloading arrow operator
  T * operator -> () {
    return ptr;
  }
};
  
int main() 
{ 
    SmartPtr<int> ptr(new int()); 
    *ptr = 20; 
    cout << *ptr << endl;
    return 0; 
} 