# TypeScript 'any' Type and Null Values: Runtime Error

This example demonstrates a common pitfall when using the 'any' type in TypeScript. While 'any' disables type checking, it doesn't prevent runtime errors related to null or undefined values.  This can lead to unexpected behavior and crashes in your application.

The issue arises when iterating over an array that potentially contains null values. The for loop attempts to access the '.length' property of a null value resulting in a runtime error.

**Solution:** Avoid the use of 'any' type.  If you are unsure of the type of array elements, consider using a union type to explicitly include null as a possibility, or use optional chaining (?.) to safely access properties.