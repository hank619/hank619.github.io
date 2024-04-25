<!--
 * @Author: Hong.Zhang
 * @Date: 2024-04-25 13:36:58
 * @Description: 
-->
# Traps with github user site

## Problem1

> By following the deployment documents of VitePress, after deploy to github user site, the link is always username github.io/username

### Reason

The repository name should be `username.github.io`, I created it wrongly as just `username`, the `username` repository is used to show info in the personal github page `https://github.com/hank619` by using its README file

### Solution

change the repository name to `username.github.io`

## Problem2

> When using github actions to deploy to github pages, it shows 403 permission error

### Reason

The GITHUB_TOKEN is default to set to only have read permission, so it cannot write to the github pages

### Solution

add write permission in workflow

```yml
permissions:
  contents: write
```
