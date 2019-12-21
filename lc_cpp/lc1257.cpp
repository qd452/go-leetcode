#include <iostream>
#include <vector>
#include <map>
#include <set>
#include "assert.h"


using namespace std;

typedef signed long long ll;

// #undef _P
// #define _P(...) (void)printf(__VA_ARGS__)
#define FOR(x,to) for(x=0;x<(to);x++)
#define FORR(x,arr) for(auto& x:arr)
#define ITR(x,c) for(__typeof(c.begin()) x=c.begin();x!=c.end();x++)
#define ALL(a) (a.begin()),(a.end())
#define ZERO(a) memset(a,0,sizeof(a))
#define MINUS(a) memset(a,0xff,sizeof(a))

// #define FOR(i, begin, end) for(int i=(begin),i##_end_=(end);i<i##_end_;i++)
// #define IFOR(i, begin, end) for(int i=(end)-1,i##_begin_=(begin);i>=i##_begin_;i--)
// #define REP(i, n) FOR(i,0,n)
// #define IREP(i, n) IFOR(i,0,n)
//-------------------------------------------------------

// Japanese Macro
#define F first
#define S second
#define R cin>>
#define Z class
#define ll long long
#define ln cout<<'\n'
#define in(a) insert(a)
#define pb(a) push_back(a)
#define pd(a) printf("%.10f\n",a)
#define mem(a) memset(a,0,sizeof(a))
#define all(c) (c).begin(),(c).end()
#define iter(c) __typeof((c).begin())
#define rrep(i,n) for(ll i=(ll)(n)-1;i>=0;i--)
#define REP(i,m,n) for(ll i=(ll)(m);i<(ll)(n);i++)
#define rep(i,n) REP(i,0,n)
#define tr(it,c) for(iter(c) it=(c).begin();it!=(c).end();it++)
template<Z A>void pr(A a){cout<<a;ln;}
template<Z A,Z B>void pr(A a,B b){cout<<a<<' ';pr(b);}
template<Z A,Z B,Z C>void pr(A a,B b,C c){cout<<a<<' ';pr(b,c);}
template<Z A,Z B,Z C,Z D>void pr(A a,B b,C c,D d){cout<<a<<' ';pr(b,c,d);}
template<Z A>void PR(A a,ll n){rep(i,n){if(i)cout<<' ';cout<<a[i];}ln;}
ll check(ll n,ll m,ll x,ll y){return x>=0&&x<n&&y>=0&&y<m;}
const ll MAX=1e9+7,MAXL=1LL<<61,dx[8]={-1,0,1,0,-1,-1,1,1},dy[8]={0,1,0,-1,-1,1,-1,1};
typedef pair<ll,ll> P;
//---------------------------------------------------

template<Z A>void print(A a){for(auto vv:a){cout<<vv<<' ';}ln;}
template<Z A>void printDct(A a){
    for (auto& it : a) {
        cout << "dct[" << it.F << "] = " << it.S << endl;
    }
}

class Solution {
public:
    string findSmallestRegion(vector<vector<string>>& regions, string x, string y) {
        map<string, string> parent;
        for (auto& it : regions) {
            for (int i = 1; i < it.size(); ++i) {
                parent[it[i]] = it[0];
            }
        }
        printDct(parent);

        set<string> s;
        while (true) {
            s.insert(x);
            if (!parent.count(x)) break;
            x = parent[x];
        }

        while (true) {
            if (s.count(y)) return y;
            if (!parent.count(y)) break;
            y = parent[y];
        }

        return "";
    }
};


int main () {
    Solution s;
    string ans;
    vector<vector<string>> regions = {{"Earth","North America","South America"},
        {"North America","United States","Canada"},
        {"United States","New York","Boston"},
        {"Canada","Ontario","Quebec"},
        {"South America","Brazil"}};
    string region1 = "Quebec", region2 = "New York";
    ans = s.findSmallestRegion(regions, region1, region2);
    assert (ans == "North America");

    return 0;
}