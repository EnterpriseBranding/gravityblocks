const { __ } = wp.i18n;
const { BlockControls, InspectorControls, registerBlockType, PlainText } = wp.blocks;
const { PanelBody, Placeholder, SelectControl, RadioControl, TextControl, TextareaControl, ToggleControl, Toolbar } = wp.components;
const { Component } = wp.element;

import classnames from 'classnames';
import { addQueryArgs } from '@wordpress/url';
import LogicControl from '../components/conditional-logic/'

import '../../scss/blocks/mailchimp.scss';

registerBlockType( 'gravityforms/mailchimp', {

	title:       'MailChimp',
	description: __( 'Embed a MailChimp signup form on your page.', 'gravityforms' ),
	category:    'embed',
	supports:    {
		customClassName: false,
		className:       false,
		html:            false,
	},
	attributes:  {
		blockID:          {
			type: 'string'
		},
		list:             {
			type: 'string'
		},
		orientation:      {
			type:    'string',
			default: 'vertical'
		},
		nameField:        {
			type:    'bool',
			default: true
		},
		doubleOptIn:      {
			type:    'bool',
			default: true
		},
		formTitle:        {
			type:    'string',
			default: 'Newsletter Signup'
		},
		formDescription:  {
			type: 'string'
		},
		submitText:       {
			type:    'string',
			default: 'Submit'
		},
		confirmationText: {
			type:    'string',
			default: __( 'Thank you for subscribing to our newsletter!', 'gravityforms' )
		},
		conditionalLogic: {
			type:    'object',
			default: {
				enabled:    false,
				actionType: 'show',
				logicType:  'all',
				rules:      [],
			},
		},
	},
	icon:        () => {
		return <svg viewBox='0 0 3052.8 3194.9' width='19px' height='20px'
					focusable='false' aria-hidden='true'
					className='dashicon dashicon-gravityforms-mailchimp'>
			<g>
				<path d="M3042,2080.4c-22-47-63.9-79.4-116.6-91.8c-17.6-80.4-41.9-119.8-44.2-125.7c9.3-10.6,18.3-21.2,20.3-23.7
		c74.3-92.2,25.8-227.2-101.2-259.1c-71.5-68.8-136.1-101.1-189.2-127.6c-50.9-25.4-30.6-15.5-78.4-37
		c-12.7-62.1-16.9-206.6-37.1-308c-18.1-91.2-54.6-157.3-111-200.8c-22.5-48.8-54.1-98-92.2-134.1c177.1-271.6,223.8-539.8,94-680.2
		C2328.7,29.7,2242.9,0,2140.3,0c-144.5,0-322.2,58.9-501.7,167.9c0,0-116.8-94-119.3-96C1019.5-321.7-393.9,1417.6,105,1797.7
		l128.8,98.4c-80.9,224.9,31.6,493.1,266,579.2c51.8,19,108,28.3,166.2,25c0,0,378.6,694.3,1177.4,694.6
		c924.1,0.3,1159.3-903.7,1161.7-911.9C3005.2,2283.1,3080,2172.4,3042,2080.4z M143.5,1682.6c-101.3-170.9,74.9-521.9,200.3-721.5
		C653.7,468,1169.4,78.8,1403.7,134.4l64.4-24.7c0.2,0.2,175.9,148.7,176.1,148.9c121-72.6,275.2-146.7,419.3-161.4
		c-87.7,19.7-194.6,65.2-321.2,142.7c-3.1,1.8-299.7,201.9-480.9,381.7c-98.7,97.9-495.3,573.4-494.9,573
		c72.5-137.1,120.2-204.5,234.9-348.7c64.9-81.6,134.1-161,205-234.2c32.9-34,66.2-66.7,99.5-97.7c22.9-21.3,45.9-41.9,68.8-61.5
		c10.6-9,21.1-17.9,31.6-26.5l0,0l-232.4-192l12.3,86l168.9,148.8c0,0-149.5,100.6-223.8,164.1c-298,254.3-590.5,644.7-699.3,1024.7
		l5.2-0.2c-54.2,29.9-108,77.8-155,143C281,1800.1,160.6,1711.7,143.5,1682.6z M636.4,2396.5c-178.5,0-323.3-152.4-323.3-340.3
		c0-188,144.7-340.3,323.3-340.3c46.3,0,90.3,10.2,130.1,28.7c0,0,68.7,34.6,88,198.4l0,0l0,0c20.1-51.2,30.3-93.1,30.3-93.1
		c23,70.4,34.8,144.5,30.2,219.4l0,0l0,0c19.1-25.4,39.6-73.3,39.6-73.3C990.1,2205,837.5,2396.5,636.4,2396.5z M1034.3,1194.6
		L1034.3,1194.6c0,0,139-264.3,444.5-439.1c-22.8-3.7-78.4,3.4-88.2,4.6c55.5-47.7,158.6-79.6,229.8-94.1
		c-20.9-13.3-70.5-16.6-95.2-17.3c-7.3-0.2-7.2-0.2-15.8,0.2c67-37.5,191.2-59.5,304.2-39.6c-14.2-18.8-46.4-32.6-68.9-39.3
		c-2-0.6-10.8-2.8-10.8-2.8s7.5-1.8,8.5-2c68-13.1,147.5,1,210.4,26.3c-7.1-16.6-24.6-35.9-37.7-48.1c-1.3-1.3-9.2-6.9-9.2-6.9
		c65.8,13.6,128.8,42.3,176.2,74.9c-6.5-12.5-22.4-33.4-33.4-44.9c62.9,18,133.4,62.8,163.6,127.1l0,0c0.7,1.4,2.7,6.7,2.9,7.3l0,0
		c-119.1-91.6-466.7-65.6-814.7,159.9C1241.2,964.3,1124.3,1077.2,1034.3,1194.6z M2912.1,2238.2c-4.2,8.2-48,245.3-298.6,442.2
		c-316.4,248.6-732.1,223.5-889.1,84.1c-83.9-78.5-120.2-190.6-120.2-190.6s-9.5,63.2-11.1,88.1c-63.3-107.6-57.9-239-57.9-239
		s-33.8,62.9-49.2,98.2c-46.6-118.5-22.5-240.9-22.5-240.9l-36.8,54.9c0,0-17.3-134.1,25.1-245.9
		c45.3-119.4,133.2-206.1,150.6-216.9c-66.7-21.2-143.5-82-143.6-82.1c0,0,30.5,2,51.8-2.9c0,0-134.8-96.6-158.4-244.3
		c19.5,24.1,60.5,51.4,60.5,51.4c-13.3-38.7-21.3-124.7-8.9-209.4v-0.1c25.5-161.7,158.8-267.1,309.8-265.8
		c160.8,1.4,268.5,35.2,403.3-89.1c28.5-26.3,51.3-49,91.3-57.9c4.2-0.9,14.7-5.3,36.2-5.3c21.7,0,42.7,4.9,61.8,16.3
		c73.1,43.5,88.9,157,96.7,240.2c29.1,308.6,17.3,253.7,142.2,317.3c59.6,30.3,126.5,59.1,202.7,140.7c0.2,0.2,0.6,0.7,0.6,0.7
		s0.7,0,0.9,0c64.2,1.5,97.4,52.1,67.7,89c-215.6,257.5-516.7,380.8-852.3,391.1c-13.9,0.4-45,1.1-45.2,1.1
		c-135.5,4.1-179.7,179.5-94.6,284.9c53.7,66.6,157.1,88.6,242.2,88.9l1.2-0.4c366.9,7.4,735.5-252.2,799.2-395.4
		c0.5-1,4.4-10.1,4.4-10.1c-14.8,17.3-372.1,353.8-806.5,341.6c0,0-47.5-1-92.2-11.4c-59-13.7-103.8-39.6-120.9-98.4
		c36,7.2,81.6,11.8,134.6,11.8c313.5,0,539.4-142.5,515.8-144.4c-0.9,0-1.9,0.2-3.4,0.6c-36.6,8.5-413.4,154.4-651.6,79.6
		c0.6-7.3,1.7-14.4,3.4-20.7c21.2-70.9,58.8-61,119.7-63.7l0,0c217.3-7.2,392.7-61.9,524.2-124.3c140.2-66.5,247-152.3,285.5-195.6
		c49.9,84,49.6,192,49.6,192s19.6-6.8,45.5-6.8C2957,2091.4,2973.8,2164.3,2912.1,2238.2z M1847.5,2335.9c0-0.4,0-0.7-0.1-1.1
		C1847.5,2335.2,1847.5,2335.5,1847.5,2335.9z M1847.4,2334.5c0-0.9-0.1-1.8-0.1-2.8c-0.2-4.7-0.2-9.5,0-14.4
		c-0.2,5.3-0.2,10.1,0,14.4C1847.3,2332.6,1847.4,2333.5,1847.4,2334.5z M1848.3,2344.8c0,0.1,0,0.3,0.1,0.4
		C1848.3,2345.1,1848.3,2345,1848.3,2344.8z M1848.4,2345.7c1.4,11.3,3.7,16.5,3.9,17.1C1850.7,2359.3,1849.3,2353.2,1848.4,2345.7z
		"/>
				<polygon points="1395.4,246.9 1438.4,260.8 1403.7,134.4 1383.2,197.4 	"/>
				<path d="M1588.1,293.6L1517,234l25.8,89.8C1557,314,1572.2,303.9,1588.1,293.6z"/>
				<path d="M1847.3,2331.7c0,1,0.1,1.9,0.1,2.8C1847.4,2333.5,1847.3,2332.6,1847.3,2331.7z"/>
				<path d="M1847.3,2317.3c-0.2,4.9-0.2,9.7,0,14.4C1847.2,2327.4,1847.1,2322.6,1847.3,2317.3z"/>
				<path d="M1847.4,2334.8c0,0.4,0,0.7,0.1,1.1"/>
				<path d="M1848.3,2345.2c0-0.1,0-0.3-0.1-0.4"/>
				<path d="M1852.3,2362.8c-0.3-0.6-2.5-5.8-3.9-17.1C1849.3,2353.2,1850.7,2359.3,1852.3,2362.8z"/>
				<path d="M2234.8,1440.8c36.8-3.2,72.7,3.3,103.2,18.6c-2.4-87.7-53.4-186.6-92-173.2l0,0l0,0l0,0
			c-22.6,7.4-26.4,47-25.9,71C2221.1,1386,2225.5,1412.6,2234.8,1440.8z"/>
				<path d="M1514.4,343.5l-146.7-44.8l96.9,81.2C1478.8,369.2,1495.5,356.9,1514.4,343.5z"/>
				<path d="M1886.7,1565.7c28.9,11.2,48.4,19.9,53.9,13.5c2.7-3.1,0.9-10.6-5.9-20.5c-17.9-26.2-52.2-48.6-82.7-59.8
			c-69.7-25.9-151.2-11.2-210.6,36.1c-29.5,24-42.6,48.7-29.1,50.7c8.3,1.2,25.5-5.9,49.9-15.2
			C1758.5,1534,1812.9,1538.2,1886.7,1565.7z"/>
				<path d="M1897.6,1653.1c18,1.2,30,2.3,32.8-2.6c6.2-10.5-41.4-46.6-106.5-35.5c-8.1,1.2-15.6,3.8-23,5.7
			c-2.7,0.7-5.3,1.6-7.8,2.7c-16,6.7-29.9,14-43.3,26.9c-15.4,14.9-19.8,28.7-15.3,32.1c4.4,3.5,15.1-1.7,31.5-8.4
			C1821.2,1651.1,1860.3,1650.5,1897.6,1653.1z"/>
				<path d="M434,2076.1L434,2076.1L434,2076.1L434,2076.1z"/>
				<path d="M751.3,1939.9c17,24.1,11.6,38.1,18.6,44.9c2.5,2.5,6.1,3.2,9.7,1.8c9.6-4,14.4-19.3,15.3-30l0,0v-0.1l0,0
			c2.4-25.7-11.2-54.6-29.2-75.1l0,0v-0.1l0,0c-23.4-27.2-60.4-48.2-102.2-54.7c-38.1-5.9-75.6,1.7-86.1,4.8h0.1
			c-5.4,1.6-12.1,3-17.8,5.2c-102.5,40-146.9,139.9-125.6,239.4c5.3,24,16,51.1,32.8,68.9l0,0l0.1,0.1l0,0c21,22.7,44,18.3,34.2-2.8
			c-2.3-5.8-15-29.7-16.7-73c-1.7-44.5,8.6-90.7,37-126c21.1-25.8,47.1-37.4,50.1-39.1l0,0c3.6-1.9,7.4-3.2,11.5-5.2
			c1.6-0.7,3.5-1.2,5.5-1.8c13-3.7,5.6-2.1,18.9-4.9l0,0C677.8,1877.3,728.8,1908,751.3,1939.9z"/>
				<path d="M719.5,2013.7c-6.9-5.4-10.1-10.1-12-17.2c-2.8-13-1.3-20.6,9.8-28.4c8.6-5.9,15.5-8.7,15.5-12.4
			c0.4-7-28.3-14.2-48.3,5.6c-16.6,17.7-21.9,54.7,4.7,83.5c29.6,31.9,75.5,39.4,82.7,79.5c0.9,5.7,1.6,12,1.1,18.3
			c0.1,7.2-2.3,17.5-2.4,18.1c-8.9,38.7-45.7,75.7-106.3,66.3c-11.2-1.6-18.4-3-20.6,0.1c-4.7,6.5,21.3,36.2,68.9,35.2
			c67.9-1.4,124.1-70.5,110.7-147.6C811.1,2047.3,744.3,2033.5,719.5,2013.7z"/>
				<path d="M2300.9,1574c-3.9,25.2,7.8,48,26.2,50.9s36.5-15.2,40.4-40.5c3.9-25.2-7.8-48-26.2-50.9
			S2304.9,1548.8,2300.9,1574z"/>
				<path d="M2166.8,1665.6c25.3,13.9,54,10.1,64.1-8.3s-2.2-44.6-27.5-58.5s-54-10.1-64.1,8.3
			C2129.2,1625.6,2141.5,1651.8,2166.8,1665.6z"/>
			</g>
		</svg>
	},

	edit: class extends Component {

		constructor() {

			super( ...arguments );

			// Set block ID.
			if ( ! this.props.attributes.blockID ) {
				this.props.setAttributes( { blockID: this.props.id } )
			}

			this.apiKeyInput = this.apiKeyInput.bind( this );
			this.authenticate = this.authenticate.bind( this );
			this.formTitleInput = this.formTitleInput.bind( this );
			this.formDescriptionInput = this.formDescriptionInput.bind( this );
			this.getFormPreview = this.getFormPreview.bind( this );
			this.setLists = this.setLists.bind( this );

		}

		componentWillMount() {

			this.setState( {
				authResponse:   null,
				authProcessing: false,
			} );

			this.setLists();

		}

		/**
		 * Authenticate with MailChimp API.
		 *
		 * @param {string} apiKey MailChimp API key.
		 */
		authenticate( apiKey ) {

			// Set auth processing state, reset auth response.
			this.setState( { authProcessing: true, authResponse: null } );

			// If no API key was provided, exit.
			if ( apiKey.length < 1 ) {
				this.setState( { authProcessing: false } );
				return;
			}

			// Prepare request URL.
			const apiURL = addQueryArgs( wpApiSettings.root + 'gf/v2/block/mailchimp/auth', { apiKey } );

			// Run API request.
			fetch( apiURL ).then(
				( response ) => {
					response.json().catch( ( error ) => {
						return { success: false };
					} ).then( ( obj ) => {

						if ( obj.success ) {

							// Set authenticated flag and lists.
							gform_mailchimp.authenticated = true;
							gform_mailchimp.lists = obj.data.lists;

							// Update lists prop.
							this.setLists();

							// Set auth processing state, auth response.
							this.setState( { authProcessing: false, authResponse: true } );

						} else {

							// Set auth processing state, auth response.
							this.setState( { authProcessing: false, authResponse: false } );

							// Focus input.
							this.refs.apiKey.focus();

						}

					} );

				},
			);

		}

		/**
		 * Assign MailChimp lists to component.
		 */
		setLists() {

			this.lists = [
				{
					label: __( 'Select a List', 'gravityforms' ),
					value: '',
				},
				...gform_mailchimp.lists
			];

		}

		/**
		 * Get input element for API Key.
		 *
		 * @returns {*}
		 */
		apiKeyInput( { showLabel, showButton, className } ) {

			const { authResponse, authProcessing } = this.state;

			const onSubmit = ( e ) => { e.preventDefault(); this.authenticate( this.refs.apiKey.value ) }

			return <div className={ className }>
				<p>
					<strong>{ __( 'You must authenticate with MailChimp before using the MailChimp block.', 'gravityforms' ) }</strong>
				</p>
				{
					showLabel &&
						<label className="blocks-base-control__label" htmlFor="gform-block__mailchimp-api">{ __( 'MailChimp API Key', 'gravityforms' ) }</label>
				}
				<form onSubmit={ onSubmit }>
					<input
						className="blocks-text-control__input"
						type="text"
						id="gform-block__mailchimp-api"
						ref="apiKey"
						disabled={ authProcessing ? 'disabled' : '' }
					/>
					{
						showButton &&
							<input type="submit" className="button" value={ __( 'Authenticate', 'gravityforms' ) } />
					}
					<div className="gform-block__mailchimp-api-response">
						{
							authProcessing &&
								<span><i className="fa fa-spinner fa-pulse fa-fw"/> { __( 'Authenticating...', 'gravityforms' ) }</span>
						}
						{
							false === authResponse &&
								<span><i className="fa fa-times"/> { __( 'Invalid API key.', 'gravityforms' ) }</span>
						}
					</div>
				</form>
			</div>;

		}

		/**
		 * Get input element for Form Title.
		 *
		 * @returns {*}
		 */
		formTitleInput() {

			let { formTitle } = this.props.attributes;
			const { setAttributes, isSelected } = this.props;

			if ( isSelected ) {
				return ( <PlainText
					className="gform_title"
					value={ formTitle }
					onChange={ ( formTitle ) => setAttributes( { formTitle } ) }
					placeholder={ __( 'Form Title', 'gravityforms' ) }
				/> );
			}

			if ( ! isSelected && formTitle ) {
				return <h3 className="gform_title">{ formTitle }</h3>
			}

		}

		/**
		 * Get input element for Form Description.
		 *
		 * @returns {*}
		 */
		formDescriptionInput() {

			let { formDescription } = this.props.attributes;
			const { setAttributes, isSelected } = this.props;

			if ( isSelected ) {
				return ( <PlainText
					className="gform_description"
					value={ formDescription }
					onChange={ ( formDescription ) => setAttributes( { formDescription } ) }
					placeholder={ __( 'Form Description', 'gravityforms' ) }
				/> );
			}

			if ( ! isSelected && formDescription ) {
				return <span className="gform_description">{ formDescription }</span>
			}

			return null;

		}

		/**
		 * Get form preview markup.
		 *
		 * @returns {*}
		 */
		getFormPreview() {

			const { orientation, nameField, submitText } = this.props.attributes;
			const isHorizontal = 'horizontal' === orientation;

			return (
				<div key="form-preview" className={ classnames( 'gform_wrapper', { 'gf_simple_horizontal_wrapper': isHorizontal } ) }>
					<div className={ classnames( { 'gf_simple_horizontal': isHorizontal } ) }>
						<div className="gform_heading">
							{ this.formTitleInput() }
							{ this.formDescriptionInput() }
						</div>
						<div className="gform_body">
							<ul className="gform_fields top_label form_sublabel_below">
								{
									!! nameField &&
									<li className="gfield field_sublabel_below field_description_below gfield_visibility_visible">
										<label className="gfield_label gfield_label_before_complex">Name</label>
										<div className="ginput_complex ginput_container no_prefix has_first_name no_middle_name has_last_name no_suffix gf_name_has_2 ginput_container_name">
												<span className="name_first">
													<input type="text" aria-label="First name"
														   placeholder={ isHorizontal ? __( 'First Name', 'gravityforms' ) : '' }/>
													<label>First</label>
												</span>
												<span className="name_last">
													<input type="text" aria-label="Last name"
														   placeholder={ isHorizontal ? __( 'Last Name', 'gravityforms' ) : '' }/>
													<label>Last</label>
												</span>
										</div>
									</li>
								}
								<li className="gfield field_sublabel_below field_description_below gfield_visibility_visible">
									<label className="gfield_label">Email</label>
									<div className="ginput_container ginput_container_email">
										<input type="text" className="medium" aria-invalid="false" placeholder={ isHorizontal ? __( 'Email Address', 'gravityforms' ) : '' }/>
									</div>
								</li>
							</ul>
						</div>
						<div className="gform_footer top_label">
							<input type="submit" className="gform_button button" value={ submitText }/>
						</div>
					</div>
				</div>
			);

		}

		render() {

			const { list, orientation, doubleOptIn, nameField, submitText, confirmationText, conditionalLogic } = this.props.attributes;
			const { setAttributes, isSelected } = this.props;
			const isHorizontal = 'horizontal' === orientation;

			const setList = ( list ) => setAttributes( { list } );

			const updateConditionalLogic = ( logic ) => setAttributes( { conditionalLogic: { ...conditionalLogic, ...logic } } );
			const toggleConditionalLogic = () => setAttributes( {
				conditionalLogic: {
					...conditionalLogic,
					enabled: ! conditionalLogic.enabled,
				},
			} );

			const controls = [
				isSelected && (
					<InspectorControls key="inspector">
						<SelectControl
							label={ __( 'List', 'gravityforms' ) }
							value={ list }
							options={ this.lists }
							onChange={ setList }
						/>
						<ToggleControl
							label={ __( 'Name Field', 'gravityforms' ) }
							checked={ nameField }
							onChange={ () => setAttributes( { nameField: ! nameField } ) }
						/>
						<ToggleControl
							label={ __( 'Double Opt-In', 'gravityforms' ) }
							checked={ doubleOptIn }
							onChange={ () => setAttributes( { doubleOptIn: ! doubleOptIn } ) }
						/>
						<PanelBody
							title={ __( 'Appearance', 'gravityforms' ) }
							className="gform-block__panel"
							initialOpen={ false }
						>
							<RadioControl
								label={ __( 'Form Orientation', 'gravityforms' ) }
								selected={ orientation }
								options={
									[
										{
											label: __( 'Horizontal', 'gravityforms' ),
											value: 'horizontal'
										},
										{
											label: __( 'Vertical', 'gravityforms' ),
											value: 'vertical'
										}
									]
								}
								onChange={ ( orientation ) => setAttributes( { orientation } ) }
							/>
							<TextControl
								label={ __( 'Submit Button Text', 'gravityforms' ) }
								value={ submitText }
								onChange={ ( submitText ) => setAttributes( { submitText } ) }
							/>
							<TextareaControl
								label={ __( 'Confirmation Message', 'gravityforms' ) }
								value={ confirmationText }
								onChange={ ( confirmationText ) => setAttributes( { confirmationText } ) }
							/>
						</PanelBody>
						<PanelBody
							title={ __( 'Conditional Logic', 'gravityforms' ) }
							className="gform-block__panel"
							initialOpen={ false }
						>
							<ToggleControl
								label={ __( 'Conditional Logic', 'gravityforms' ) }
								checked={ conditionalLogic.enabled }
								onChange={ toggleConditionalLogic }
							/>
							{
								conditionalLogic.enabled &&
								<LogicControl
									key="gform-block__conditional"
									logic={ conditionalLogic }
									onChange={ updateConditionalLogic }
								/>
							}
						</PanelBody>
					</InspectorControls>
				)
			];

			const toolbar = [
				isSelected && (
					<BlockControls key="controls">
						<Toolbar
							key="controls-toolbar"
							controls={
								[
									{
										icon:     'image-flip-horizontal',
										title:    __( 'Horizontal Orientation', 'gravityforms' ),
										isActive: isHorizontal,
										onClick:  () => setAttributes( { orientation: 'horizontal' } )
									},
									{
										icon:     'image-flip-vertical',
										title:    __( 'Vertical Orientation', 'gravityforms' ),
										isActive: ! isHorizontal,
										onClick:  () => setAttributes( { orientation: 'vertical' } )
									}
								]
							}
						/>
					</BlockControls>
				)
			];

			if ( ! gform_mailchimp.authenticated ) {

				return [
					<Placeholder key="placeholder" className="wp-block-embed gform-block__placeholder gform-block__mailchimp-placeholder">
						<div className="gform-block__placeholder-brand">
							<img src={ gform_mailchimp.placeholder } width="248"/>
							<p><strong>MailChimp</strong></p>
						</div>
						{ this.apiKeyInput( { showButton: true, className: 'gform-block__mailchimp-placeholder-auth' } ) }
					</Placeholder>,
				]

			}

			if ( ! list ) {

				return [
					controls,
					<Placeholder key="placeholder" className="wp-block-embed gform-block__placeholder">
						<div className="gform-block__placeholder-brand">
							<img src={ gform_mailchimp.placeholder } width="248"/>
							<p><strong>MailChimp</strong></p>
						</div>
						<form>
							<select value={ list } onChange={ ( e ) => setList( e.target.value ) }>
								{ this.lists.map( list =>
									<option key={ list.value } value={ list.value }>{ list.label }</option>,
								) }
							</select>
						</form>
					</Placeholder>,
				]

			}

			return [
				toolbar,
				controls,
				this.getFormPreview()
			];

		}

	},

	save( props ) {

		return null;

	}

} );
