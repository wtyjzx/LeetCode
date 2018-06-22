

function min(a, b){
	return a> b ? b : a 

}
  
  var min = 

function isEven(){
	if (n === 0) {
        return true

	}
	if (n === 1) {
		return  false

	}
	return isEven( n - 2)
}


function mod (a,b ){ // a % b
    if (a < b ) {
    	return a 
    }       else{
    	return mod(a -b ,b )
    }


}

function countChar(str, c ){
	var count = 0
	for (var i = .length - 1; i >= 0; i--) {
		
	}
}


















/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var longUrl = []
    var n = longUrl
    for (var i = n.length - 1; i >= 0; i--) {
    	 if (n.length == 0) {
    	 	return n
    	 }
    }
   
};

https://leetcode.com/problems/design-tinyurl
longUrl =  {
    a :  leetcode.com  []   ,
    b:   problems    [] ,    
    c:   design-tinyurl   []
}

longUrl.a[0] = 

longUrl.a.length
longUrl = [
   { a :  leetcode.com  []}   ,''

   {b:   problems    [] }, 

   {c:   design-tinyurl   []}

]
longUrl[0].a[0]  =
longUrl[].a.length


/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var shortUrl = []

};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */v





/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var nums = new Array[]

    var maxnum =   Math.max(nums)
    for (var i = 0; i < nums.length; i++) {
    	if (nums[i] < maxnum) {
            return  

    	}

    }
};


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
   

};



/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	 
    if (n == 1) {
    	return  true
    } else if (n == 0) {
      
     return false
      
    } else if (n == 2) {
     return true
    }else if ( n % 3 == 0) {
    	return false
    } else
    if (n !== 0){

        var s 
        s = (n / 2)  % 2
    	
    	 
    	if (s == 2) {
    		return true
    	}else
    	if (s == 4) {
    		return true
    	}else
    	if (s == 6) {
    		return true
    	}else
    	if (s == 8) {
    		return true
    	} else{
    		return false
    	}


    
}



};


 var isPowerOfTwo = function(n){
          
    if(n != 0){
        while(n != 1){
            if(n  % 2 == 0){
                n = n / 2;
            }else{
                return false;
            }

        }
        return true;
    }else{
        return false;
    }
}
       








var combinationSum3 = function(k, n) {
         na = new Array()

        if  (k === 1){
           console.log ( na.push(n))

          }else
           if (k === 2  && n > 2) {
           for (var i = 1; i < 9 ; i++) {
              	nb = new Array[2]
               nb[0] = nb[i ]
               nb[1] = nb [i]
              

               while ( nb[0] + nb [1]  == n ){
                    console.log ( na.pushO(nb[i],nb[i]))

               }

           }  
       }
           
           
    

       else

     if (k === 3 && n > 5) {
          for (var i = 1; i < 9 ; i++) {
              	nb = new Array[3]
               nb[0] = nb[i ]
               nb[1] = nb [i]
               nb[2] = nb [i ]

               while ( nb[0] + nb [1] + nb [2] == n ){
                    console.log( na.push(nb[i],nb[i],nb[i]))

               }


     }   
     	
     }
};





/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	var x = 0
	var y = 0
	
	for (var i = 0; i < moves.length ; i++) {
		
    if (moves[i] === 'U') {
    	y++
    } else if (moves[i] ==='D') {
    	y--
    }else if (moves[i] === 'L') {
    	x++
    }else if (moves[i] === 'R') {
    	x--
    }
}
if ( x === 0 && y === 0){
    	return true
    }
return false
  
};







for(var i = 1; i< 10000; i++) {   
  
  if (isPrime(i)) {
   
    console.log(i)
  }
}
	

//  判断素数	

	
var isPrime = function(n) {
  if (n === 1) {
    return false
  }
  var m = Math.sqrt(n)
  for(var i = 2; i <= m ;i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}



var countPrimes = function(n) {
	var sum = 0
    for(var i = 0; i<= n; i++) {   
      
    
    if (i === 1 ) {
    return false
  }
  var m = Math.sqrt(i)
  for(var a = 2; a <= m ;a++) {
    if (i % a == 0) {
      return false
    }
    sum++
  }
}
  return sum

};


var isHappy = function(n) {
	
	var x = 0
	var count = new Array()
    while(n > 0){
       
    var digit = (n % 10)
    x = digit **2 + x

    n = ((n - digit) / 10) 

             
	}
	 if (x === 1) {
		return true
	}else {
		if (count.indexof(x) >= 0) {
			return false
		}
	count.push(x)
	 return isHappy(x)
	}
};




var singleNumber = function(nums) {
    var x = 0

    for (var i =0 ; i < nums.length; i++) {
    	x = x ^ nums[i]
      
    }
    return x
}



var checkRecord = function(s) {
	var str = ['A','L','P']
	var sum = 0
	
	
    for (var i = 0; i< s.length ; i++) {
      if (s[i] == str[0]  ) {
           sum++
      } else if (s[i] + s[i + 1] + s[i + 2] == str[1] + str[1]+ str[1]  ) {
          return false
      }
    }
    if (sum >=2  ) {
    	return false
    }
    return true
};



var isUgly = function(num) {
	if (num <= 0) {
		return false
	}
      if (num === 1) {
      	return true
      }
      if (num % 2 === 0) {
      	return isUgly(num /2 )
      }
      if (num % 3 === 0) {
      	return isUgly(num / 3 )
      }
      if (num % 5 === 0) {
      	return isUgly(num  / 5)
      }
      return false

};




var arrayPairSum = function(nums) {
	var n = (nums.length + 1) / 2
    
    var min =  Infinity
    var max = - Infinity
    var num = new Array()
    for (var i = 0; i< nums.length ; i++) {

    	if (nums[i]< min ) {
    		min = nums[i]
    		num.push(min)
    	}
    	if (nums[i]> max ) {
    		max = nums[i]
     		num.push(max)
    	}
    	
    }
    function minsum(n){
    	var x = 0
    	for (var i = 0; i< nums.length ; i++) {

    	if (num[i]< num[i+1] ) {
    		x = num[i] + x
    		return minsum(num[i+2])
    	}
    }
    	return x
    }

};





var isAnagram = function(s, t) {
	var s = new Array()
	var t = new Array()
	
  	for (var i =0 ; i<  ; i++) {
  			
  		}	


};



function ary2list(ary) {
  if (ary.length == 0) {
    return null
  }
  var head = {
    value: ary[0],
    next: null,
  }
  var currLast = head
  for(var i = 1; i<ary.length; i++) {
    var node = {
      value: ary[i],
      next: null,
    }

    currLast.next = node
    currLast = node
  }

  return head
}


function list2ary(head){
	var result = []

	while(head){
		result.push(head.value)
		head = head.next

	}
	return result
}


function list2ary(l1,l2){
	if(! l1){
		return l2 
	}
	
}

var missingNumber = function(nums) {
    var n =[]
    var s =[]
    for(var i = 0; i < n.length ; i ++){

    	if (nums[0] == n[i] ) {
    		n[0] = nums[0]
    		for (var i = n[0]; i < nums.length ; i++) {
    			s.push(i)
    			if (s[i] !== nums[i]) {
    				return i
    		}	else if (s[i] == nums[i]) {
    			return n[i+1]
    		}
    	}
    }

}
};

// 等差数列方法


var missingNumber = function(nums) {
     var  xor = 0, i = 0;
	for (i = 0; i < nums.length; i++) {
		xor = xor ^ i ^ nums[i];
	}

	return xor ^ i;

};


var checkPerfectNumber = function(num) {
        var b = 0
   		var c = 0
 	for (var i = 0; i<= num ; i++) {
   		 b++
   		if (num % b == 0) {
   			c = c + b
           
            
   		}
   	}
   	if((c- num) == num){
   	    return true
   	}
   	return false

};

var rotate = function(nums, k) {
	var s = k 
	for (var i = 0; i <= k ; i++) {
    		nums[k] = nums[i]
    		k = k + i
 			if (k <= nums.length) {
 				k = s
 				for (var i = k; i >0 ; i--) {
    			nums[k-1] = nums[nums.length - 1]
    			k = k-1
    			nums.length = nums.length - 1

    	}
 		}
    	}
   
   
    return nums
};



 for (var i = 0, j = 0; j < nums.length; j++) {
            if (nums[j] !== nums[nums.length - k]) {
                nums[i] = nums[nums.length - k];
                k = k -1
                i++
            }

    function movezeroes(nums , k ) {
        for (var i = 0, j = 0,n = 0; j < nums.length; j++) {
            if (nums[j] !== nums[nums.length - k ]) {
                nums[i] = nums[nums.length - k];
 				nums[n] = nums[j]
 				k = k - 1
                n++
                i++
            }
        }
        
        return nums
    }

function movezeroes(array) {
        for (var i = 0, j = 0; j < array.length; j++) {
            if (array[j] !== 0) {
                array[i] = array[j];
                i++
            }
        }
        for (;i < array.length; i++) {
            array[i] = 0;
        }
        //return array(原地修改，不返回)
    }






var findMaxConsecutiveOnes = function(nums) {
    var count = 0
    var result = 0
    var i = 0
    while (i < nums.length){
    for (var i =0 ; i< nums.length ; i++) {
    	if (nums[i] == 1) {
    		count ++
    		result = Math.max(count,result)
    	}else  {
    		count = 0
    	}
    }
    }
    	return result
    
};






var twoSum = function(nums, target) {
	var count = 0
	var n = []
	for (var i = nums.length - 1; i >= 0; i--) {
		if (target === 0) {
			return  n.push(nums.indexOf(0))
		}else if (target > 0 ) {
			count = target - nums[i]
			if (count in nums) {
				 n.push(i,nums.indexOf(count ))
			}
		}
		return n
	}
    


var selfDividingNumbers = function(left, right) {
    var nums = []
    
    for (var i = left ; i <= right ; i++) {
    	if (isselfnumber(i)) {
    		nums.push(i)
    	}
    		
    }
    return nums
    										

}
var function isselfnumber(n){
	var start = n
	while(n > 0){
		var r = n % 10
		if (r == 0) {
			return false
		}
		if (start % r !=0) {
			return false
		}
		n /=10
	}
	return true
}



var hammingWeight = function(n) {
    var s = n.toString(2)
    var count = 0
    for(i = 0; i < s.length; i ++){
    	if (+s[i] === 1) {
    		count ++
    	}
    }
    return count 
};

var hammingWeight = function(n) {
	var count = 0
   while(n !== 0){
   		if(n & 1 === 1){
   			count++
   		}
   		n = n >> 1
   }
   
   return count
};



var reverseString = function(s) {
    var n = []
    for (var i = s.length - 1; i >= 0; i--) {
    	n.push(s[i])
    }
    return n
};

var reverseString = function(s) {
    var n = ''
    var i = s.length
    while (n.length < s.length){
        
      i = i -1
      n = n + s.charAt(i )
        
       
    
    }
    return n
};



var sortColors = function(nums) {
	var x1= 0
	var x2=0
	var x3 = 0
    for (var i = 0; i < nums.length; i ++) {
    	if (nums[j] == 0) {
    		x1++
    	}
    	if (nums[i] == 1) {
    		x2++
    	}
    	if(nums[i] == 2){
    		x3++
    	}
  }  	
  	for (var i =0 ; i < nums.length; i++) {
  		if (i < x1) {
  			nums[i] = 0
  		}else if (i< x1 + x2) {
  			nums[i] = 1
  		}else{
  			nums[i] = 2
  		}
  	}
};



function movezeroes(array) {
        for (var i = 0, j = 0; j < array.length; j++) {
            if (array[j] !== 0) {
                array[i] = array[j];
                i++
            }
        }
        for (;i < array.length; i++) {
            array[i] = 0;
        }
        //return array(原地修改，不返回)
    }





function sigma(f,start,end){
	var sum = 0
	for (var i =start ; i <= end; i++) {
		sum += f(x)
	}
	return sum  

}








var reverseBits = function(n) {
	if (n === 0) {
		return 0
	}
	var result = 0
	for (var i = 0 ; i < 32; i ++) {
    	result << 1
    	if ((n & 1) ==1) {
    		result ++
    		n >> 1
    	}
    	
    }
    return result
};


var searchInsert = function(nums, target) {
    if (var target in nums) {
    	return  nums.indexOf(target)
    }else
    if (target > Math.max(nums)) {
    	return nums.length
    }else
    if (target < Math.min(nums)) {
    	return 0
    }else
     {
     	for (var i = 0; i< nums.length ; i++) {
     		if (target > nums[i] && target < nums[i + 1]) {
     			return i + 1
     		}
     	}
     }
};



var getSum = function(a, b) {
    if (a == 0) {
    	return b
    }else if (b == 0) {
    	return  a
    }
    var sum 
    var get 
    if (a != 0) {
    	get = a ^ b
    	sum = (a & b) <<1
    }
    return get + sum 
};





var findWords = function(words) {
	obj = {
     str1= [q,,w,e,r,t,y,u,i,o,p],
     str2= [a,s,d,f,g,h,j,k,l],
     sre3= [z,x,c,v,b,,n,m]
 }
    for (var i = words.length - 1; i >= 0; i--) {
    	if (words[i] in obj) {
    		return words[i]
    	}
    }
};


var removeElement = function(nums, val) {
    var count = 0
    var sum = 0
    for (var i = nums.length - 1; i >= 0; i--) {
    	if (nums[i] == val) {
    		count ++
    	}
    }
    return  sum = nums.length - count 
};



var singleNumber2 = function(nums) {
    var  ones = 0, twos = 0;
    for(int i = 0; i < nums.length; i++){
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
};




var judgeSquareSum = function(c) {
    if (c < 0) {
    	return false
    }
    var x = 0
    var y = Math.sqrt(c)
    while(x < y){
    	var count = x **2 + y **2
    	if (count < c) {
    		x ++
    	}else if (count > c) {
    		y --
    	}else{
    		return true
    	}
    }
    return false


};

	

var Sn = function(n,val){
	function s(val){
		return n * n 
	}
	return n = Sn(n) + Sn(n - 1)
}



var largestNumber = function(nums) {
    var n =[]
    var digit = 0
    var min =  Infinity
    var max =	-Infinity
    var sum = Math.max(...nums)
    var count = 0
    for (var i = nums.length - 1; i >= 0; i--) {
    	
    	if (nums[i] < min) {
    		min = nums[i]
    		n.push(nums[i])

    	}else if (nums[i] > max) {
    		max = nums[i]
    		n.push(nums[i])
    	}else  {
    		digit = sum % 10
    		if (nums[i]< 10 && nums[i] > digit) {
    			count = nums[i]
    		}
    	}

    }


};




var hasCycle = function(head) {
    var p  = head
    var pre = head
    while(p != null && p.next !=null){
    	if (p.next == head ) {
    		return true
    	}
    	p = p.next
    	pre.next = head
    	pre = p
    }
    return false
};



var reverseList = function(head) {
    if(!(head && head.next)){
        return head
    }
    var tail = head.next
    var newHead = reverseList(tail)
    tail.next = head
    head.next = null
    return newHead
};



var lengthOfLastWord = function(s) {
    var sum = 0
    var last = s.length - 1
    while (last >= 0 && s[last] == ' '){
    	last --
    }
    while (last >=0 && s[last] != ' '){
    	sum++
    	last--
    }
return sum 
};



var plusOne = function(digits) {
    var n = digits.length
    for (var i = n -1; i >= 0; i--) {
    	if (digits[i] < 9) {
    		digits[i]++
    		return digits
    	}else if (digits[i] == 9){
    	digits[i] = 0
        
    }
    }
   
     digits[n] = 0
    digits [0] = 1
  
    return digits
};



var climbStairs = function(n) {
    var a
    var b
    
     a = b = 1
    while (n--)
        a = (b += a) - a
    return a
};



var mergeTwoLists = function(l1, l2) {
    
		if(l1 == null){ 
			return l2
		}
  
        if(l2 == null) {
        	return l1

        }
        if (l1.val < l2.val) {
        	l1.next = mergeTwoLists(l1.next,l2) 
        	return l1
        }
        else {
        	l2.next = mergeTwoLists(l2.next,l1) 
        	return l2
        }
};




var minMoves = function(nums) {
    if (nums.length == 0) {
    	return 0
    }
    var min = nums[0]
    var sum = 0
    for (var i =0; i < nums.length  ; i++) {
    	sum += nums[i]
    	min = Math.min(min,nums[i])
    }
    return (sum - min*nums.length)
};




var findTheDifference = function(s, t) {
	var  c = 0;
	for (var i = 0; i < s.length; ++i) {
		c ^= s.charAt(i);
	}
	for (var i = 0; i < t.length; ++i) {
		c ^= t.charAt(i);
	}
	return c 
}



var isAnagram = function(s, t) {
    var s = new Array()
    var t = new Array()
    var tr = t
    if(var tr in s){
        return true
    }
    return false
};




var swapPairs = function(head) {
    if (head ==null || head.next == null) {
    	return head
    }
    var newhead = head.next
    head.next = swapPairs(newhead.next)
    newhead.next = head
    return newhead
};



var pivotIndex = function(nums) {
    var sum = 0
    var leftsum =0
    for (var i = 0; i < nums.length; i++) {
    	sum += nums[i]
    }
    
    for (var i = 0; i < nums.length; i++) {
    	if(sum - nums[i]  == leftsum * 2){
            return i
        }
        leftsum += nums[i]
    }
    return -1
};



var findDisappearedNumbers = function(nums) {
    var fin = []
    var n = nums.length 
    for (var i =0 ; i< nums.length  ; i++) {
    	nums[(nums[i] -1) % n] += n
    }
    for (var i =0 ; i< nums.length  ; i++) {
    	if (nums[i] <= n) {
    		fin.push(i + 1)
    	}
    }
    return fin
};





var minimumTotal = function(triangle) {
	var n = new Array(triangle.length + 1)
	for (var i = triangle.length - 1; i >= 0; i--) {
		for (var j = 0 ; j < triangle.get[i].length ; j ++) {
			n[j] = Math.min(n[j],n[j+ 1]) + triangle.get[i].get[j]
		}
	}
	return n[0]
};



var minMoves2 = function(nums) {
	function sortNumber(a,b){
		return a -b
	}
	nums.sort(sortNumber)
    var i = 0
    var j = nums.length - 1
    var count = 0
    while(i < j){
    	count += nums[j]- nums[i]
    	i++
    	j--
    }
    return count
};




var checkPossibility = function(nums) {
    var s = 0
    for (var i = 1, n = nums[0]; i < nums.length; i++) {
    	if (nums[i] < n) {
    		if (s ++ >0) {
    			return false
    		}
    		if (i - 2>=0 && nums[i -2] > nums[i]) {
    			continue
    		}
    	}
    	n = nums[i]
    }
    return true
};



var findErrorNums = function(nums) {
	var n = []
    var count = 0
    for (var i = 0; i < nums.length;  i ++) {
    	while(nums[i] != nums[nums[i] - 1]){
    		count = nums[i]
    		nums[i] = nums[nums[i] - 1]
    		nums[nums[i] - 1] = count
    	}
    }
    for (var i = 0 ; i < nums.length; i++) {
    	if (nums[i] != i + 1) {
    		  n.push(nums[i], i + 1)
    	}
    }
    return n
};




var findDuplicate = function(nums) {
    if (nums.length > 1)
	{
		var slow = nums[0];
		var fast = nums[nums[0]];
		while (slow != fast)
		{
			slow = nums[slow];
			fast = nums[nums[fast]];
		}

		fast = 0;
		while (fast != slow)
		{
			fast = nums[fast];
			slow = nums[slow];
		}
		return slow;
	}
	return -1;
};





var majorityElement = function(nums) {
    var sum = nums.length
    var count = []
    for (var i = 0 ; i < sum; i ++) {
    	count += nums[i]
    	if (count > sum/2) {}

    }
};


var containsDuplicate = function(nums) {
    
};


var deleteDuplicates = function(head) {
   if (head == null || head.next == null) {
   	return head
   }
   head.next = deleteDuplicates(head.next)
   return head.val === head.next.val ? head.next : head
};




var strStr = function(haystack, needle) {
    var n1 =haystack.length
    var n2 = needle.length
    if (n1 < n2) {
    	return -1
    }
    else if (n2 = 0) {
    	return 0
    }
    var sub = n1 -n2
    for (var i = 0 ; i <= sub; i ++) {
    	if (haystack.slice(i,i+n2).equals(needle)) {
    		return i
    	}
    }
    return -1
};




var hasAlternatingBits = function(n) {
    
     var n1 = 0
    var n2 = 0
    if ((n & 1 ) == 1) {

    	for (var i = 0; i < n.length ; i ++) {
    		n1 = n1 + 1
            n2 = n2 + 2
    		if (n[n1] == 1 && n[n2] == 0) {
    			return true
    		}else {
    			return false
    		}
    	}
    }else {
    	for (var i = 0; i < n.length ; i ++) {
    		n1 = n1 + 1
            n2 = n2 + 2
    		if (n[n1] == 1 && n[n2] == 0) {
    			return true
    		}else {
    			return false
    		}
    	}
    }



var hasAlternatingBits = function(n) {
   
  	  	var s  = n & 1

        while ((n & 1) == s) {
            s = 1 - s
            n = n >> 1
        }
        return n == 0

};







var firstMissingPositive = function(nums) {
    function sortNumber(a,b) {
    	return a - b
    }
    if(nums == null){
    return 1
    }
    var n = nums.sort(sortNumber)
    var ad = n[0]
    if(n[n.length] <= 0  ){
        return 1
    }
    for (var i = 0 ; i < nums.length; i ++) {
    	
    	while(ad == n[i]){
    		ad = ad + 1
    		if (ad == 0) {
    			ad = ad + 1
    		}

    	}
    }
    return ad

};



var singleNumber = function(nums) {
    function sortNumber(a,b){
    	return a - b
    }
    var newnum = []
    var n = nums.sort(sortNumber)
    for (var i = 0  ; i < nums.length; i ++) {
    	if (n[i] == n[i + 1]) {
    		i = i + 2
    	}else {
    		i = i + 1
    	}
    	newnum.push(n[i])
    }
    return newnum 
};


var singleNumber = function(nums) {
    var result = new Array(2);        
    var xor = nums[0];
    for (var i=1; i<nums.length; i++)
    {
        xor ^= nums[i];
    }
    
    var bit = xor & ~(xor-1);
    var num1 = 0
    var num2 = 0
    
    for (var num in nums)
    {
        if ((num & bit) > 0)
        {
            num1 ^= num;
        }
        else
        {
            num2 ^= num;
        }
    }
    
    result[0] = num1;
    result[1] = num2;
    return result;
};





function reverse( nums, start,  end) {
    while (start < end) {
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}


var rotate = function(nums, k) {
      k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};



////////
var distributeCandies = function(candies) {
     return Math.min(new Set(candies).size, candies.length / 2)
};







var addTwoNumbers = function(l1, l2) {
	var x = l1
	var y = l2
	var addsum = 



};




var widthOfBinaryTree = function(root) {
	var xleft = root.left
	var xright = root.right
	
	var count = 0
    if (root == null ) {
    	return 0
    }
    while(xleft !== null && xright !== null){
    	xleft = xleft.left
    	xright = xright.right
    	count = (count + 1) * 2
    	if (xleft !==null && xright == null) {
    		count = (count + 1) * 2 - 1
    	} 

    }

    while(xleft !== null && xright ==null){
    	xleft = xleft.left
    	xright = xleft.right
    	while(xleft !== null && xright !== null){
    	xleft = xleft.left
    	xright = xright.right
    	count = (count + 1) * 2
    } 
    }
    return count 
};

var maxDepth = function(root) {
   if(root==null){
            return 0;
        }
        return 1+Math.max(maxDepth(root.left),maxDepth(root.right));

};




var isSameTree = function(p, q) {
 	if (p === null && q === null) {
 		return true
 	}
 	if (p ===null || q === null) {
 		return  false
 	}

 	if (p.val == q.val) {
 		isSameTree (p.left ,q.left) && isSameTree(p.right, q.right)
 	}
 	return true
};





var minDepth = function(root) {
    if(root==null){
            return 0;
        }
        return 1+Math.min(maxDepth(root.left),maxDepth(root.right));
};


function parseValue(){
	if (jsonStr === number) {
		return  value
	}
	if (jsonStr === 'boolean') {
		if () {
			return true
		} else {
			return false
		}
	}

	if (jsonStr === string ) {
		return string() 
	}
	if (jsonStr[i] === )
}


function string(){
	var result = ''
	while(jsonStr[i] === '"'){
		return jsonStr.value
		i++
	}

}

function number(){
	

}

function 

function getElements(){
	
}





var mergeTrees = function(t1, t2) {
    var therealt1 = 
    if (ti.value === ) {

    
    }
    var therealt2 = 
};


var twoSum = function(numbers, target) {
    var n = []
    for(var i = 1 ; i < numbers.length ; i ++){
        
       	var x = 0
        x = numbers[i] + numbers[i + 1]
        if (x === target) {
        return  n.push( i , i + 1)
        }
    }
 
   return n 
   
};




var majorityElement = function(nums) {
    var n = []
    var count  = 0
    var sum = nums.map(x => x * (x+1) )
    for (var i = nums.length - 1; i >= 0; i--) {
    	nums[i]
    }
   	
};






var maximumSwap = function(num) {
	var a = num
	var b = a + ''
	var n = b.split('')
	var start = 0
    var count = 0
    var mid = 0
    var fix = 0
    
    if(num <= 10){
        return num
    }
    for (var i = 0; i < n.length ; i++) {

         
    	if (n[i ]  <= n[i +1]) {
    		mid = i
    		start = n[i + 1]
    		count = i + 1
    		
    		for (var j =i + 1  ; j<n.length ; j++) {
    				if (n[j] >= start) {

    					start = n[j]
    					count = j 
    				} 

    		}
    	if (n[fix] < n[count]) {
    			n[count] = n[fix] 
    	  		n[fix] = start
    			return Number(n.join('')) 
    		}  else  {
    			n[count] = n[mid] 
    	  		n[mid] = start
    			return Number(n.join('')) 
    		}  	
    	}
    	else {
    		fix =i 
    	}
    
    }
    return num 
}
  

var maximumSwap = function(num) {
    var a = num
	var b = a + ''
	var n = b.split('')
	var start = 0
    var count = 0
    var mid = 0
    if(num <= 10){
        return num
    }
    for (var i = 0; i < n.length ; i++) {
    	for (var j = i + 1; j < n.length; j++) {
    			 if (n[i] < n[j]) {
    				mid = i
    				start = n[j]
    				count = j 
    				i = j 
    			}
    	} 
    	if (n[mid] < n[count]) {
    		n[count] = n[mid] 
    		n[mid] = start
    		return Number(n.join('')) 

    	}
    	
    	}
    return num 
    
};


var integerBreak = function(n) {
    if (n === 2 || n === 3) {
    	return n - 1
    }
    var result = 1
    while(n > 4){
    	result = result * 3
    	n -= 3
    }
    return result * n 

};


var hIndex = function(citations) {
    var n = citations.sort((a,b) => a - b)
    var res = 0
    for (var i = n.length - 1; i >= 0; i--) {
        if( res >= n[i]){
    		return res 
    	}
        
        if(res < n.length){
            res++
        }
    	
    	 
    }
    return n.length
    
};


var addBinary = function(a, b) {
    var al = a.length
    var bl = b.length

};


var hasPathSum = function(root, sum) {
    if (!root) {
    	return false
    }
    var rl = root.value
    if (rl === sum && !root.left && !root.right) {
    	return true
    }
    return hasPathSum(root.left ,sum-rl) || hasPathSum(root.right,sum - rl )
};



var preorderTraversal = function(root) {
    var n = []
   
    if (root === null) {
    	return n 
    }
   	var left = preorderTraversal(root.left)
   	var right = preorderTraversal(root.right)
   	
   	return 
 	
};

var hasPathSum = function(root, sum) {
    if (!root) {
    	return false
    }
    if (!root.left && !root.right && root.val === sum ) {
    		return true
    	}
   
    return false
};


/*var preorderTraversal = function(root) {
    var n = []
   
    if (root === null) {
    	return n 
    }
    if (root) {
    	n.push(root.val)
    	preorderTraversal(root.left)
    	preorderTraversal(root.right)
    }
 	return n 
};*/



var isBalanced = function(root) {
    if(!root){
    	return true
    }
    var leftdep = isBalanced(root.left)
    var rightdep = isBalanced(root.right)
    if (leftdep < 0 || rightdep < 0 || leftdep - rightdep > 0) {
    	return false
    }
   	return true
};




var reorderList = function(head) {
    
};


var canPartition = function(nums) {
    var startn = 0
    for (var i = nums.length - 1; i >= 0; i--) {
    	for (var j = nums.length - 1; i >= 0; i--) {
    		if (nums[i] === nums[j]) {
    			return true
    		}
    		else{

    		}
    	}
    }
};



var fourSumCount = function(A, B, C, D) {
    var 
};



