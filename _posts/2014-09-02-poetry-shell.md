---
layout: post
title: "生命之诗-shell"
description: ""
category:  "shell"
tags: ["poetry", "shell", "tech"]
shortContent: "Shell是老牌的linux脚本设计语言，曾经以卓越的运行速度和功能著称于世，我们拿来写诗试试看!"
---
{% include JB/setup %}

```shell
#!/bin/sh

randNum=0
plans=("Failed, try again" "Fell down, come one" "Congratulations, keep going")

function random(){
    randNum=$((RANDOM%($1)))
}

function doPlan(){
    next=true

    while [ $next == true ]; do
        random 3
        echo ${plans[$randNum]}
        if [ ${randNum} -eq 0 ]; then
            next=true
        else
            next=false
        fi
    done
}


function life(){
    echo "I got new plan"
    doPlan
    random 2
    if [ $randNum -eq 0 ]; then
        echo "No regrets"
        exit 0
    fi
    life
}

life

```

```yaml
;生命是一段漫长的旅程
;想了，就去做
;输了，重头再来
;摔了，爬起来继续
;赢了，还要再往前走
;死了，没留下任何遗憾
```
