# 2021cce 程設

# 第一週

## 第一題

![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/1.png?raw=true)

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

![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/2.png)

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

![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/3.png)

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

![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/4.png?raw=true)

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

![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/5.png)

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
 
 ![1](https://github.com/ZeroOne123456/2021cce/blob/7c1eaa20fbf5c212be3097be1a619a27ab0da026/HW%201.png)
 
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
 
 ![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/HW%20%202.png?raw=true)
 
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
 
 ![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/HW%20%203.png?raw=true)
 
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
 
 ![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/HW%20%204.png?raw=true)
 
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
 
 ![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/HW%20%205.png?raw=true)
 
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
 
 ![6](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/HW%20%206.png?raw=true)
 
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

## 第一題

![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-1.png?raw=true)

```c
#include <stdio.h>
int U[100];
int main()
{
	int N;
	scanf("%d",&N);
	for( int i=0;i<N;i++ ){
		scanf("%d",&U[i]);
		printf("%d,",U[i]*U[i]);
	}
	printf("\n");
}
```


## 第二題

![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-2.png?raw=true)

```c
#include <stdio.h>
int main()
{
	char c[10];
	scanf("%s",&c);
	int i=0;
	while( c[i]!='\0' )
	{
		if( 'A'<=c[i]&&c[i]<='Z' ){
			printf("%c",c[i]-'A'+'a');
		}
		else if( 'a'<=c[i]&&c[i]<='z' ){
			printf("%c",c[i]-'a'+'A');
		}
		else printf("%c",c[i]);

		i++;
	}
	printf("\n");
}
```


## 第三題

![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-3.png?raw=true)

```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	printf("%d ",n/7);
	printf("%d\n",n%7);
}
```


## 第四題

![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-4.png?raw=true)

```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	if( n<=2000 ) printf("%d\n",100);
	else if( (n-2000)%500==0 ) printf("%d\n",100+(n-2000)/500*5);
	else if( (n-2000)%500!=0 ) printf("%d\n",100+((n-2000)/500+1)*5);
}
```


## 第五題

![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-5.png?raw=true)

```c
#include <stdio.h>
int main()
{
	int n,m,tamp=0;
	scanf("%d%d",&n,&m);
	if( n>m ) {
		tamp=n;
		n=m;
		m=tamp;
	}
	for( int i=n;i<=m;i++ ){
		if( i%5==0 ) printf("%d\n",i);
	}
}
```


## 第六題

![6](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week03-6.png?raw=true)

```c
#include <stdio.h>
int a[100];
int main()
{
	int min,max;
	for( int i=0;i<3;i++ ){
		scanf("%d",&a[i]);
		min=a[0];
		max=a[0];
		for( int i=0;i<3;i++ ){
			if( min>a[i] ) min=a[i];
			if( max<a[i] ) max=a[i];
		}
	}
	printf("%d\n",max-min);
}
```
