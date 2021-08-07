const htmlDocumentContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="parent">
    <!-- COMMENT -->
    <!-- Another comment-->
    <div>child 1</div>
    <div>child 2</div>
    <div>child 3</div>
  </div>
</body>
</html>
최소한의 의미가 있는 단위로 쪼갰어야했다
`

const child1 = {
  nodeType: 1,
  nodeName: 'div',
  childNode: [],
  attributes: [

  ]
}