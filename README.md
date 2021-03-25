# 2021cce 程設

# 第一週

## 第一題

![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week01/1.png)

```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	printf("%d=50*%d+5*%d+1*%d\n",n,n/50,n%50/5,n%50%5);
}
```
## 第二題

![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week01/2.png)

```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	int num=0;
	for( int i=1;i<=n;i++ ){
		if( n%i==0 ) num+=1;
	}
	printf("%d\n",num);
}
```

## 第三題

![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week01/3.png)

```c
#include <stdio.h>
int a[10];
int main()
{
	for( int i=0;i<10;i++ ){
		scanf("%d",&a[i]);
	}
	int num=0;
	for( int i=0;i<10;i++ ){
		if( a[i]%3==0 )  num+=1; 
	}
	printf("%d\n",num);
}
```

## 第四題

![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week01/4.png?raw=true)

```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	if( n>=90 ) printf("A\n");
	else if( n<90 && n>=80 )  printf("B\n");
	else if( n<80 && n>=60 )  printf("C\n");
	else printf("F\n");
}
```

## 第五題

![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week01/5.png)

```c
#include <stdio.h>
int main()
{
    int a,b,ans,temp;
    scanf("%d%d",&a,&b);
    if( b>a ) temp=a;
    else      temp=b;
    for( int i=1;i<=temp;i++ ){
        if( a%i==0&&b%i==0 ){
            ans=i;
        }
    }
    printf("%d\n",a/ans);
    printf("---------\n");
    printf("%d\n",b/ans);
}
  
```
 
 # 第二週 
 
 ## 第一題
 
 ![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%201.png)
 
 ```c
 #include <stdio.h>
 int n[10];
 int main()
 {
 	int T;
	for( int i=0;i<=10;i++ ){
		scanf("%d",&);
		if( n[i]==0 ){
			T=i;
			break;
		}
	}
	for( inti=T-1;i>=0;i-- ){
		printf("%d",n[i]);
	}
	printf("\n");
 }
 ```
 
 ## 第二題
 
 ![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%20%202.png)
 
 ```c
#include <stdio.h>
int MYPOWER(int n,int m)
{
	int ans=1;
	for( int i=1;i<=m;i++ ){
		ans*=n;
	}
	return ans;
}
int main(void)
{
	int a,b;
	scanf("%d%d",&a,&b);
	printf("[%d]",MYPOWER(a,b));
	return 0;
}
 ```
 
 ## 第三題
 
 ![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%20%203.png)
 
 ```c
 #include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	int ans=0;
	for( int i=1;i<=n;i++ ){
		ans=ans+i*(i-1);
	}
	printf("%d\n",ans);
}
 ```
 
 ## 第四題
 
 ![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%20%204.png)
 
 ```c
 #include <stdio.h>
int main()
{
	printf("Enter two numbers:  ");
	int n,m;
	scanf("%d%d",&n,&m);
	if(n==m) printf("It is a square ");
	else printf("It is not a square ");
}
 ```
 
 ## 第五題
 
 ![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%20%205.png)
 
 ```c
 #include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	int ans=0;
	if( n/1000==1 )     ans+=8;
	if( n%1000/100==1 ) ans+=4;
	if( n%100/10==1 )   ans+=2;
	if( n%10==1 )       ans+=1;
	printf("%d\n",ans);
}
 ```
 
 ## 第六題
 
 ![6](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week02/HW%20%206.png)
 
 ```c
 #include <stdio.h>
int N[1000];
int main()
{
	float n;
	scanf("%f",&n);
	for( int i=0;i<n;i++ ){
		scanf("%d",&N[i]);
	}
	float ans=0;
	for( int i=0;i<n;i++ ){
		ans=ans+N[i];
	}
	float sum=ans/n;
	printf("均標:%.1f\n",sum);
	
	float ans2=0,a=0;
	for( int i=0;i<n;i++ ){
		if( N[i]>=sum ){
			ans2=ans2+N[i];
			a=a+1;
		}
	}
	float sum2=ans2/a;
	printf("前標:%.1f\n",sum2);
}
 ```

# 第三週

![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03/week3-1.png)

![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03/week3-2.png)

![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03/week3-3.png)

![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03/week3-4.png)
