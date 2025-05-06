import React, { Component } from 'react';
import { motion } from 'framer-motion';

class PageTransition extends Component {
    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {this.props.content}
            </motion.div>
        );
    }
}

export default PageTransition;
