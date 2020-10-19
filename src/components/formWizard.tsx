import React, { ReactNode, ReactElement, useEffect } from "react"
import { FieldProps, FormikConfig, FormikValues, FormikHelpers, Formik, Form, ErrorMessage, FormikProps, useFormikContext } from "formik"
import { Input, Flex, Box, Button, InputGroup, Textarea, Text, Checkbox, TextProps } from "@chakra-ui/core"
import { ctaButtonProps, errorTextProps } from "./commonProps"

type FormStepProps = {
  children: ReactNode,
  validationSchema?: any
}

interface IconInputProps extends FieldProps {
  leftIcon?: ReactNode
}

export const FormIconInput = ({ field, form, leftIcon, ...meta }: IconInputProps) => {
  return <InputGroup>
    {leftIcon}
    <Input {...field} {...meta} mb={2} />
  </InputGroup>
}

export const FormInput = ({ field, form, ...props }: FieldProps) => {
  return <Input {...field} {...props} mb={2} />
}

export const FormInputMulti = ({ field, form, ...props }: FieldProps) => {
  return <Textarea {...field} {...props} mb={2} resize="none" />
}

export const FormCheckbox = ({ field, form, ...props }: FieldProps) => {
  return <Checkbox {...field} {...props} mb={2} isChecked={field.value} />
}

export const StyledError = ({ name, ...props }: { name: string, props?: TextProps }) => {
  return <ErrorMessage name={name} >{(error) => <Text {...errorTextProps} {...props}>{error}</Text>}</ErrorMessage>
}

export const FormStep = ({ children, validationSchema }: FormStepProps) => { return <>{children}</> }

export const FormWizard = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(children)
  const [currentStep, setCurrentStep] = React.useState(0)
  const step = (childrenArray[currentStep])

  /* useEffect(() => {
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }, [currentStep]) */

  const stepForward = () => {
    setCurrentStep(s => s + 1)
  }
  const stepBackward = () => {
    setCurrentStep(s => Math.max(0, s - 1))
  }

  const resetSteps = (e: any) => {
    setCurrentStep(0)
  }

  const handleSubmit = async (values: FormikValues, helpers: FormikHelpers<FormikValues>) => {
    helpers.setTouched({})
    if (currentStep == childrenArray.length - 1) {
      return props.onSubmit(values, helpers)
    }
    else {
      stepForward()
      helpers.validateForm()
    }
  }
  return (
    <Formik
      {...props}
      validationSchema={(step as ReactElement<FormStepProps>).props.validationSchema}
      onSubmit={handleSubmit}
      onReset={resetSteps}>
      {bag => {
        return (
          <Form style={{ height: "100%" }}>
            <Flex flexDirection="column" h="100%">
              {childrenArray[currentStep]}
              <Box flexGrow={1} />
              <Flex justifyContent="flex-end" align="flex-end">
                <Button variant="outline" mx={2} hidden={currentStep == 0} aria-disabled={currentStep == 0} onClick={() => stepBackward()}>Previous</Button>
                <Button
                  disabled={(currentStep == childrenArray.length - 1) && !(bag.isValid && bag.dirty)}
                  {...ctaButtonProps}
                  mx={2} minWidth={[0, 0, "150px"]} isLoading={bag.isSubmitting} type="submit" >
                  {(currentStep == childrenArray.length - 1) ? "Submit" : "Next"}
                </Button>
              </Flex>
            </Flex>
          </Form>)
      }}
    </Formik>
  )
}