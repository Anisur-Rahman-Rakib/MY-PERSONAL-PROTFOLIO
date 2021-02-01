#include<stdio.h>
void add(int a ,int b);
void sub(int a ,int b);
void del(int a ,int b);
void mul(int a ,int b);
void main()
{
    add(10,20);
    sub(50,20);
    del(20,20);
    mul(5,20);
    getch();
}
void add(int a ,int b)
{
    int sum = a+b;
    printf("%d",sum);
}
void sub(int a ,int b)
{
    int minus = a-b;
    printf("%d",minus);
}
void del(int a ,int b)
{
    int divide = a/b;
    printf("%d",divide);
}
void mul(int a ,int b)
{
    int into = a*b;
    printf("%d",into);
}




