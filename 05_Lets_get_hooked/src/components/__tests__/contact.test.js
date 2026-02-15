import { render,screen } from '@testing-library/react'
import Contact from '../Contact'
import "@testing-library/jest-dom"


describe("group of contact us test cases", ()=>{

  // beforeAll(()=>{
  //   console.log("Before All")
  // })

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterAll(()=>{
  //   console.log("Afeter All");
  // })

  // afterEach(()=>{
  //   console.log("After Each");
    
  // })

   test("should load contact us component", ()=>{
        render(<Contact />)
      const  heading = screen.getByRole("heading")

      expect(heading).toBeInTheDocument()
    })

    test("should load button text of contact us component", ()=>{
        render(<Contact />)
      const  buttonText = screen.getByText("Send Message")

      // Assertion 

      expect(buttonText).toBeInTheDocument()

    })

    test("should load button from contact us component", ()=>{
      render(<Contact />)
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument()
    })

    test("should load all inputs from conatct component", ()=>{
      render(<Contact />)

      const inputs = screen.getAllByRole("textbox")

      expect(inputs.length).toBe(3)
    })

// We can also write (it) and (test) also it's a same thing 

    it("should load all palceholderText from conatct component", ()=>{
      render(<Contact />)

      const palceholderText = screen.getByPlaceholderText(/Enter your name/i) //i means case sesitive

      expect(palceholderText).toBeInTheDocument()
    })

    

    
})

 
