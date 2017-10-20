const { isPalindrome } = require( "../lib" );

describe( "isPalindrome", () => {
  test( "isPalindrome returns true for radar", () => {
    expect( isPalindrome( "radar" ) ).toBe( true );
  });

  test( "isPalindrome returns true for ''", () => {
    expect( isPalindrome( "" ) ).toBe( true );
  });

  test( "isPalindrome returns false for notradar", () => {
    expect( isPalindrome( "notradar" ) ).toBe( false );
  });

  test( "isPalindrome throws error for NaN", () => {
    expect( () => isPalindrome( NaN ) ).toThrowError( "Provided value must be a string." );
  });

  test( "isPalindrome throws error for any Number", () => {
    expect( () => isPalindrome( 42 ) ).toThrowError( "Provided value must be a string." );
  });
});
