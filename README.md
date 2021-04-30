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

 # 第七週

![1](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-1.png )
```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	int a = n/100 , b = n%100;
	if( a==b%10*10+b/10 ) printf("YES\n");
	else  printf("NO\n");
}
```

![2](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-2.png)
```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	int a=0;
	while( n!=0 ){
		a=a*10+n%10;
		n/=10;
	}
	printf("%d\n",a);
}
```

![3](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-3.png)
```c
#include <stdio.h>
int a[10];
int main()
{
	for( int i=0;i<10;i++ ){
		scanf("%d",&a[i]);
		if( a[i]==0 ){
			break;
		}
	}
	
	int n,ans=0;
	scanf("%d",&n);
	
	for( int i=0;i<10;i++ ){
		if( a[i]==n ){
			ans+=1;
		}
	}
	
	printf("%d\n",ans);
}
```

![4](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-4.png)
```c
#include <stdio.h>
int f(int a,int b){
	if( a>b ) return 1;
	else if(a==b) return 0;
	else if( a<b ) return- 1;
}
int main(){
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d",f(a,b));
    return 0;
}
```

![5](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-5.png)
```c
#include <stdio.h>
int a[50];
int main()
{
	for( int i=0;i<100;i++ ){
		scanf("%d",&a[i]);
		printf("Enter an integer ( 999 to end ): \n");
		if( a[i]==999 ){
			break;
		}
	}
	int ans=0;
	for( int i=0;i<100;i++ ){
		if( a[i]==999 ){
			break;
		}
		ans+=a[i];
	}
	printf("The total is: %d",ans);
}
```

![6](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-6.png)
```c
#include <stdio.h>
int main()
{
	int n,m;
	scanf("%d%d",&n,&m);
	printf("%d",n%m);
}
```

![7](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-7.png)
```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);

	if(n>=90)  {printf("A");}
	else if(n < 90 && n >= 80)  {printf("B");}
	else if(n < 80 && n >= 70)  {printf("C");}
	else if(n < 70 && n >= 60)  {printf("D");}
	else  {printf("F");}
}
```

![8](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-8.png)
```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	if( n<=1500 )  printf("100");
	if( n>1500&&n%250!=0 ){
		n=(n-1500)/250+1;
		printf("%d",100+n*5);
	}
	if( n>1500&&n%250==0 ){
		n=(n-1500)/250;
		printf("%d",100+n*5);
	}
}
```

![9](https://github.com/ZeroOne123456/2021cce/blob/gh-pages/week07-9.png)
```c
#include <stdio.h>
int main()
{
	int n;
	scanf("%d",&n);
	printf("%d=50*%d+10*%d+5*%d+1*%d",n,n/50,n%50/10,n%50%10/5,n%50%10%5/1);
}
```

# 第十週
```c
#include <stdio.h>
#include <string.h>   //strcmp()、strcpy()
#include <stdlib.h>   //qsort()
char line[1000];
char tree[1000000][32];
int compare( const void * p1,const void * p2 ){
	return strcmp( (char*)p1,(char*)p2 );
}
int main()
{
	int T;   //step01->讀資料
	scanf("%d\n\n",&T);
	
	for(int t=0;t<T;t++){   //step01->讀資料、gets()讀一整行
		int N=0;   //要知道有幾棵樹
		while( gets(line)!=NULL ){   //step02->讀失敗會變NULL
			if( strcmp(line,"")==0 ) break;   //空行也要離開
			
			strcpy(tree[N], line);   //step04->把樹的名字放到tree[i]裡
			N++;   //step03->統計樹的資料
		}
		
		qsort(tree , N, 32, compare);//step05->照樹的名字排序
		
		int ans=1;//新的開始
		printf("%s ",tree[0]);
		for( int i=0;i<N;i++ ){
			if( strcmp(tree[i],tree[i+1])==0 ){//相同
				ans++;
			}else{//不相同,收尾+新的開始
				printf("%d\n", ans);//收尾
				ans=1;//新的開始
				printf("%s ", tree[i+1]);//新的開始
			}
		}
		
	}
}
```
