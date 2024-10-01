import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface PopProps {
    children: React.ReactNode;
  }

const Poptext: React.FC<PopProps> = ({children}) => {
    const control = useAnimation(); 
    const [ref, isInView] = useInView({triggerOnce: true}); 
    
    const scrollVariants = {
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1,
          type: "spring",
        },
      },
      hidden: {
        y: 30,
        opacity: 0,
      },
    }

    useEffect( 
      ()=>{
        if(isInView){
          control.start("visible");
        }
      },
      [isInView]
    );

    return(
        <motion.div
          className="figure2"
          //initial={{ scale: 0, opacity: 0 }}
          //animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          variants = {scrollVariants}
          ref = {ref} 
          initial = "hidden"
          animate = {control} 
        >
          <Sp>{children}</Sp>
        </motion.div>
    );

}

const Sp = styled.p`
    font-size: 20px;
    padding-left: 10%;
    padding-right: 10%;
`;

export default Poptext;
