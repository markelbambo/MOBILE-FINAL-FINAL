/****Script for MAINCONFIG****/

/*
 *
 *  FUNCTION NAME : getXmlData 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data of topology
 *  PARAMETERS    : 
 *
 */
function getXmlData(name){
	DomainName = window['variable' + dynamicDomain[pageCanvas]];
	ZoneName = 'Default';
	var mainconfig = globalMAINCONFIG[pageCanvas].MAINCONFIG[0];
	var XmlString = "<MAINCONFIG ResourceId='' MainId='' MainConfigurationUserId='"+globalUserId+"' Name='"+name+"'";
	XmlString += " Reevaluate='' AttributeId='' Power='' ReachabilityComplete='' ConnectivityComplete='' DateEdit='' Action=''";
	XmlString += " RtmId='' TimeEdit='' AllowLoad='' DebugId='' Id='' Description='' ConvergenceComplete=''";
	XmlString += " UserName='"+globalUserName+"' Flag='"+mainconfig.Flag+"' TftpIpAddress='' TftpImagePath='' TftpImageName='' DateTIME=''"; 
	XmlString += " Interval='' Iteration='' IterList='' IterNumber='' Offset=''";
	XmlString += " DST='' ResourceOrig='' ReservationType='' DevListFlag='"+mainconfig.DevListFlag+"'";
	XmlString += " DevListCtr='"+mainconfig.DevListCtr+"' DndCtr='"+mainconfig.DndCtr+"' TopologyName='"+TopologyName+"' CommitEnable='"+mainconfig.CommitEnable+"'";
	XmlString += " DeviceConfigurationEnable='' TGENConfigurationEnable='' ImageConfigurationEnable='' PortMappingEnable=''";
	XmlString += " LinkSanityEnable='' URLConfigFlag='false' FileType='"+FileType+"' URLImageFlag='false' SetNewValues='' RedFlag='' DomainName='"+mainconfig.DomainName+"'";
	XmlString += " Connectivity='"+mainconfig.Connectivity+"' DeviceSanity='"+mainconfig.DeviceSanity+"' AccessSanity='"+mainconfig.AccessSanity+"' ZoneName='"+mainconfig.ZoneName+"'";
	XmlString += " DebugMode='"+window['variable' + dynamicDebug[pageCanvas] ]+"' LoadImageEnable='"+mainconfig.LoadImageEnable+"' LoadConfigEnable='"+mainconfig.LoadConfigEnable+"' SaveImageEnable='"+mainconfig.SaveImageEnable+"'";
	XmlString += " SaveConfigEnable='"+mainconfig.SaveConfigEnable+"'>";
	XmlString += getDeviceInformation();
	XmlString += "</MAINCONFIG>";
	return XmlString;
	
}
/*
 *
 *  FUNCTION NAME : getDeviceInformation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : Mark Anthony Elbambo 
 *  REVISION DATE : Jan 20, 2014
 *  REVISION #    : 2
 *  DESCRIPTION   : get xml data of devices in canvas
 *  PARAMETERS    : XmlString 
 *	MODIFICATIONS :	added the loop for deleted items
 */
function getDeviceInformation(){
	var XmlString = "";
	var devicesArr = getDevicesNodeJSON();
	if(devicesArr.length){
		for(var t=0; t<devicesArr.length; t++){
			var device = devicesArr[t];	
			XmlString += "<DEVICES DeviceName='"+device.DeviceName+"' DeviceType='"+device.DeviceType+"' ObjectPath='"+device.ObjectPath+"'";
			XmlString += " Model='"+device.Model+"' DNDModelType='"+device.DNDModelType+"' SoftwareVersion='"+device.SoftwareVersion+"'";
			XmlString += " OSVersion='"+device.OSVersion+"' OSType='"+device.OSType+"' SoftwarePackage='"+device.SoftwarePackage+"'";
			XmlString += " ReEvaluate='"+device.ReEvaluate+"' IpAddress='"+device.IpAddress+"' DeviceId='"+device.DeviceId+"'";
			XmlString += " HostName='"+device.DeviceName+"' UpdateFlag='new' MediaType='"+device.MediaType+"'";
			XmlString += " Portname='"+device.Portname+"' ManagementIp='"+device.ManagementIp+"' ManagementIp2='"+device.ManagementIp2+"'";
			XmlString += " Auxiliary='"+device.Auxiliary+"' DiscoveryFlag='"+device.DiscoveryFlag+"' Exclusivity='"+device.Exclusivity+"'";
			XmlString += " XLocation='"+device.XLocation+"' YLocation='"+device.YLocation+"' PowerStatus='"+device.PowerStatus+"'";
			XmlString += " Power='"+device.Power+"' TftpIpAddress='"+device.TftpIpAddress+"' TftpHostname='"+device.TftpHostname+"'";
			XmlString += " TftpImagePath='"+device.TftpImagePath+"' TftpImageName='"+device.TftpImageName+"' TftpUser='"+device.TftpUser+"'";
			XmlString += " TftpPassword='"+device.TftpPassword+"' TftpAddress='"+device.TftpAddress+"' TacacsIpAddress='"+device.TacacsIpAddress+"'";
			XmlString += " TacacsHostname='"+device.TacacsHostname+"' RadiusHostname='"+device.RadiusHostname+"'";
			XmlString += " RadiusIpAddress='"+device.RadiusIpAddress+"' RadiusUsername='"+device.RadiusUsername+"'";
			XmlString += " RadiusPassword='"+device.RadiusPassword+"' Description='"+device.Description+"' Processor='"+device.Processor+"'";
			XmlString += " ProcessorBoardId='"+device.ProcessorBoardId+"' Manufacturer='"+device.Manufacturer+"' SerialNumber='"+device.SerialNumber+"'";
			XmlString += " IOS='"+device.IOS+"' CPUSpeed='"+device.CPUSpeed+"' SystemMemory='"+device.SystemMemory+"' NVRAMCF='"+device.NVRAMCF+"'";
			XmlString += " ProcessorMemory='"+device.ProcessorMemory+"' ConnectivityDone='"+device.ConnectivityDone+"'";
			XmlString += " ReachabilityDone='"+device.ReachabilityDone+"' ConvergenceDone='"+device.ConvergenceDone+"'";
			XmlString += " TFTPUser='"+device.TFTPUser+"' TFTPPassword='"+device.TFTPPassword+"' FTPServer='"+device.FTPServer+"'";
			XmlString += " TFTPServer='"+device.TFTPServer+"' FTPUser='"+device.FTPUser+"' FTPPassword='"+device.FTPPassword+"'";
			XmlString += " ConfigDetail='"+device.ConfigDetail+"' ConfigFilePath='"+device.ConfigFilePath+"' ConfigFileName='"+device.ConfigFileName+"'";
			XmlString += " ConfigUrl='"+device.ConfigUrl+"' SaveConfigUrl='"+device.SaveConfigUrl+"' ConfigServer='"+device.ConfigServer+"'";
			XmlString += " ConfigDestination='"+device.ConfigDestination+"' ImageFilePath='"+device.ImageFilePath+"'";
			XmlString += " ImageDetail='"+device.ImageDetail+"' ImageFileName='"+device.ImageFileName+"' ImageUrl='"+device.ImageUrl+"'";
			XmlString += " SaveImageUrl='"+device.SaveImageUrl+"' ImageServer='"+device.ImageServer+"' ImageDestination='"+device.ImageDestination+"'";
			XmlString += " SaveImageEnable='"+device.SaveImageEnable+"' SaveConfigEnable='"+device.SaveConfigEnable+"'";
			XmlString += " LoadConfigEnable='"+device.LoadConfigEnable+"' LoadImageEnable='"+device.LoadImageEnable+"'";
			XmlString += " SaveImageDetail='"+device.SaveImageDetail+"' SaveImageServer='"+device.SaveImageServer+"'";
			XmlString += " SaveImageDestination='"+device.SaveImageDestination+"' SaveImageUser='"+device.SaveImageUser+"'";
			XmlString += " SaveImagePassword='"+device.SaveImagePassword+"' SaveImageType='"+device.SaveImageType+"'";
			XmlString += " SaveConfigDetail='"+device.SaveConfigDetail+"' SaveConfigServer='"+device.SaveConfigServer+"'";
			XmlString += " SaveConfigDestination='"+device.SaveConfigDestination+"' SaveConfigUser='"+device.SaveConfigUser+"'";
			XmlString += " SaveConfigPassword='"+device.SaveConfigPassword+"' SaveConfigType='"+device.SaveConfigType+"'";
			XmlString += " SaveConfigFileName='"+device.SaveConfigFileName+"' SaveImageFileName='"+device.SaveImageFileName+"'";
			XmlString += " SystemImageName='"+device.SystemImageName+"' SystemConfigName='"+device.SystemConfigName+"'";
			XmlString += " SaveTypeImage='"+device.SaveTypeImage+"' TypeImage='"+device.TypeImage+"' SaveTypeConfig='"+device.SaveTypeConfig+"'";
			XmlString += " TypeConfig='"+device.TypeConfig+"' ChassisPid='"+device.ChassisPid+"' ChassisVid='"+device.ChassisVid+"'";
			XmlString += " ManagementInterface='"+device.ManagementInterface+"' ManagementInterface2='"+device.ManagementInterface2+"'";
			XmlString += " CheckConnectivity='' ConnectivityFlag='"+device.ConnectivityFlag+"' Reachability='' ReachabilityFlag='' ConvergenceFlag='' MainPortOnSwitch=''";
			XmlString += " FabricPort='' OrangeFlag='' PortType='' DeviceRole='' FabricPortOnSwitch='' PortOnSlot='' Slot=''";
			XmlString += getFilterAttribute(device);
			XmlString += getTitanInformation(device);
			XmlString += ">";
			XmlString += getDeviceInformation2(device);
			XmlString += getDeviceChild(device);
			XmlString +="</DEVICES>";
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getFilterAttribute 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for filter
 *  PARAMETERS    : device,XmlString 
 *
 */
function getFilterAttribute(device){
	var XmlString = "";
	XmlString += " RouteProcessorName='"+device.RouteProcessorName+"' TotalMemory='"+device.TotalMemory+"'";
	XmlString += " TotalMemory2='"+device.TotalMemory2+"' RouteProcessorName2='"+device.RouteProcessorName2+"'";
	XmlString += " RouteRedundant='"+device.RouteRedundant+"' RouteProcessorDescription='"+device.RouteProcessorDescription+"'";
	XmlString += " RouteProcessorProductId='"+device.RouteProcessorProductId+"' RouteProcessorProductId2='"+device.RouteProcessorProductId2+"'";
	XmlString += " RouteProcessorVersionId='"+device.RouteProcessorVersionId+"' RouteProcessorVersionId2='"+device.RouteProcessorVersionId2+"'";
	XmlString += " EmbeddedRedundant='"+device.EmbeddedRedundant+"' EmbeddedProcessorName='"+device.EmbeddedProcessorName+"'";
	XmlString += " EmbeddedProcessorName2='"+device.EmbeddedProcessorName2+"'";
	XmlString += " EmbeddedProcessorDescription='"+device.EmbeddedProcessorDescription+"'";
	XmlString += " EmbeddedProcessorProductId='"+device.EmbeddedProcessorProductId+"'";
	XmlString += " EmbeddedProcessorVersionId='"+device.EmbeddedProcessorVersionId+"'";
	XmlString += " EmbeddedProcessorVersionId2='"+device.EmbeddedProcessorVersionId2+"'";
	XmlString += " EmbeddedProcessorNitrox='"+device.EmbeddedProcessorNitrox+"' EmbeddedProcessorOcteon='"+device.EmbeddedProcessorOcteon+"'";
	XmlString += " EmbeddedProcessorNitrox2='"+device.EmbeddedProcessorNitrox2+"'";
	XmlString += " EmbeddedProcessorOcteon2='"+device.EmbeddedProcessorOcteon2+"' LineCardName='"+device.LineCardName+"'";
	XmlString += " LineCardDescription='"+device.LineCardDescription+"' LineCardProductId='"+device.LineCardProductId+"'";
	XmlString += " LineCardVersionId='"+device.LineCardVersionId+"' LineCardNumber='"+device.LineCardNumber+"'";
	XmlString += " ModuleDescription='"+device.ModuleDescription+"' ModuleProductId='"+device.ModuleProductId+"'";
	XmlString += " ModuleName='"+device.ModuleName+"' ModuleVersionId='"+device.ModuleVersionId+"'";
	XmlString += " ProductFamily='"+device.ProductFamily+"' ServerType='"+device.ServerType+"'";
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getTitanInformation 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for titan
 *  PARAMETERS    : device,XmlString 
 *
 */
function getTitanInformation(device){
	var XmlString = "";
	XmlString += " ManagementIpMask='"+device.ManagementIpMask+"' ManagementIpMask2='"+device.ManagementIpMask2+"'";
	XmlString += " ManagementIpv6='"+device.ManagementIpv6+"' ManagementIpv62='"+device.ManagementIpv62+"'";
	XmlString += " ManagementIpv6Prefix='"+device.ManagementIpv6Prefix+"' ManagementIpv6Prefix2='"+device.ManagementIpv6Prefix2+"'";
	XmlString += " ProcessorType='"+device.ProcessorType+"' CPUCores='"+device.CPUCores+"' ProcessorSockets='"+device.ProcessorSockets+"'";
	XmlString += " CoresPerSocket='"+device.CoresPerSocket+"' LogicalProcessor='"+device.LogicalProcessor+"' ConsoleIp='"+device.ConsoleIp+"'";
	XmlString += " TitanName='"+device.TitanName+"' ProcessorFamily='"+device.ProcessorFamily+"' ProcessorPId='"+device.ProcessorPId+"'";
	XmlString += " ConsoleNet='"+device.ConsoleNet+"' Ipv6='"+device.Ipv6+"' Key='"+device.Key+"' Admin='"+device.Admin+"' Access='"+device.Access+"'";
	XmlString += " Account='"+device.Account+"' AccountPort='"+device.AccountPort+"'";
	XmlString += " AuthenticationDirectory='"+device.AuthenticationDirectory+"' AuthenticationPort='"+device.AuthenticationPort+"'";
	XmlString += " BEHostlist='"+device.BEHostlist+"' ConfigMethod='"+device.ConfigMethod+"'";
	XmlString += " ConfigFile='"+device.ConfigFile+"' ConfigPath='"+device.ConfigPath+"' ConfigName='"+device.ConfigName+"'";
	XmlString += " ClearType='"+device.ClearType+"' COAPort='"+device.COAPort+"' Community='"+device.Community+"'";
	XmlString += " Connectivity='"+device.Connectivity+"' DatabaseName='"+device.DatabaseName+"'";
	XmlString += " DatabaseTableName='"+device.DatabaseTableName+"' DatabaseType='"+device.DatabaseType+"'";
	XmlString += " DefaultSM='"+device.DefaultSM+"' DeviceList='"+device.DeviceList+"' ExtensionIp='"+device.ExtensionIp+"'";
	XmlString += " EnablePassword='"+device.EnablePassword+"' Features='"+device.Features+"' Function='"+device.Function+"'";
	XmlString += " LogDirectory='"+device.LogDirectory+"' NRCMD='"+device.NRCMD+"' NRCMDUsername='"+device.NRCMDUsername+"'";
	XmlString += " Port='"+device.Port+"' RedirectPort='"+device.RedirectPort+"' RedirectLogPort='"+device.RedirectLogPort+"'";
	XmlString += " RootDirectory='"+device.RootDirectory+"' ServerDirectory='"+device.ServerDirectory+"' VendorType='"+device.VendorType+"'";
	XmlString += " Snapshot='"+device.Snapshot+"' DomainName='"+device.DomainName+"' Application='"+device.Application+"'";
	XmlString += " Sequence='"+device.Sequence+"' RP0ConsoleIp='"+device.RP0ConsoleIp+"' RP1ConsoleIp='"+device.RP1ConsoleIp+"'";
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDeviceInformation2 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : Mark Anthony O. Elbambo
 *  REVISION DATE : Jan. 14, 2014
 *  REVISION #    : 1
 *  DESCRIPTION   : get xml data for device node
 *  PARAMETERS    : device,XmlString 
 *	MODIFICATION  : removed the UpdateFlag
 */
function getDeviceInformation2(device){
	var XmlString = "";
	if(device.DEVICE != null && device.DEVICE != undefined){
		var devObject = device.DEVICE[0];
		XmlString += "<DEVICE ChassisAddress='"+devObject.ChassisAddress+"' LoopBackAddress='' ObjectPath='"+devObject.ObjectPath+"' Username='"+devObject.Username+"'";
		XmlString += " ESXIUsername='"+devObject.ESXIUsername+"' Password='"+devObject.Password+"' ESXIPassword='"+devObject.ESXIPassword+"'";
		XmlString += " Status='"+devObject.Status+"' DeviceName='"+devObject.DeviceName+"' DevName='"+devObject.DevName+"'";
		XmlString += " DeviceId='"+devObject.DeviceId+"' RedFlag='"+devObject.RedFlag+"' ModelType='"+devObject.ModelType+"'";
		XmlString += " DNDModelType='"+devObject.DNDModelType+"' DeviceResId='"+devObject.DeviceResId+"' MacAddress='"+devObject.MacAddress+"'";
		XmlString += " DeviceFlag='"+devObject.DeviceFlag+"' HostName='"+devObject.HostName+"'";
		XmlString += " MediaType='"+devObject.MediaType+"' Portname='"+devObject.Portname+"' DBResId='"+devObject.DBResId+"'";
		XmlString += " ConnectivityType='"+devObject.ConnectivityType+"' PortSpeed='"+devObject.PortSpeed+"'";
		XmlString += " PortBandWidth='"+devObject.PortBandWidth+"' ExactHostName='"+devObject.ExactHostName+"'";
		XmlString += " LoadFlag='"+devObject.LoadFlag+"' PortView='"+devObject.PortView+"' Discovery='"+devObject.Discovery+"'";
		XmlString += " RouteProcessor='"+devObject.RouteProcessor+"' EmbeddedProcessor='"+devObject.EmbeddedProcessor+"'";
		XmlString += " LineCard='"+devObject.LineCard+"' ExactIpAdd='"+devObject.ExactIpAdd+"' PowerStatus='"+devObject.PowerStatus+"'";
		XmlString += " Application='"+devObject.Application+"' ProtoTypeFlag='"+devObject.ProtoTypeFlag+"'";
		XmlString += " SwitchPort='"+devObject.SwitchPort+"' MapName='"+devObject.MapName+"' ControllerInfo='"+devObject.ControllerInfo+"'";
		XmlString += " DeviceType='"+devObject.DeviceType+"'";
		XmlString += " />";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getDeviceChild 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 5, 2013 
 *  MODIFIED BY   : Mark Anthony O. Elbambo
 *  REVISION DATE : Jan. 13,2014
 *  REVISION #    : 1
 *  DESCRIPTION   : get xml data for device node
 *  PARAMETERS    : device,XmlString 
 *	MODIFICATION  : commented checkRackDevPath
 */
function getDeviceChild(device){
	var XmlString = "";
	if(device.RACK != null && device.RACK != undefined){
		XmlString += getRackObject(device.RACK);
	}else if(device.SLOT != null && device.SLOT != undefined){
		XmlString += getSlotObject(device.SLOT);
	}else if(device.MODULE != null && device.MODULE != undefined){
		XmlString += getModuleObject(device.MODULE);
	}else if(device.PIC!= null && device.PIC != undefined){
		XmlString += getPicObject(device.PIC);
	}else if(device.PORT != undefined && device.PORT != null){
		XmlString += getPortObject(device.PORT);
	}else if(device.SUBCHANNEL != undefined && device.SUBCHANNEL != null){
		XmlString += getSubchannelObject(device.SUBCHANNEL);
	}else if(device.PORTMAP != undefined && device.PORTMAP != null){
		XmlString += getPortmapObject(device.PORTMAP);
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getRackObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : Mark Anthony O. Elbambo
 *  REVISION DATE : Jan. 13,2014
 *  REVISION #    : 1
 *  DESCRIPTION   : get xml data for rack node
 *  PARAMETERS    : dev,device,XmlString 
 *	MODIFICATION  : commented checkRackDevPath
 */
function getRackObject(rackArr){
	var XmlString = "";
	for(var t=0; t<rackArr.length; t++){
		var rackobject = rackArr[t];
		if(rackobject.RackDevName == device.ObjectPath){
			XmlString += "<RACK RackDeviceId='"+rackobject.RackDeviceId+"' ProductNumber='"+rackobject.ProductNumber+"'";
			XmlString += " SwVersion='"+rackobject.SwVersion+"' RackName='"+rackobject.RackName+"' ObjectPath='"+rackobject.ObjectPath+"'";
			XmlString += " HwVersion='"+rackobject.HwVersion+"' Number='"+rackobject.Number+"' PortGroupSize='"+rackobject.PortGroupSize+"'";
			XmlString += " Ios='"+rackobject.Ios+"' ModuleDescription='"+rackobject.ModuleDescription+"' SerialNumber='"+rackobject.SerialNumber+"'";
			XmlString += " ModelType='"+rackobject.ModelType+"' BoardType='"+rackobject.BoardType+"' RackDevName='"+rackobject.RackDevName+"'";
			XmlString += " RackId='"+rackobject.RackId+"' MapName='"+rackobject.MapName+"' RedFlag='"+rackobject.RedFlag+"'";
			XmlString += " OrangeFlag='"+rackobject.OrangeFlag+"' UpdateFlag='"+rackobject.UpdateFlag+"'>";
			XmlString += getDeviceChild(rackobject);
			XmlString += " </RACK>";
		}
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getSlotObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for rack node
 *  PARAMETERS    : device,XmlString 
 *
 */
function getSlotObject(slotArr){
	var XmlString = "";
	for(var t=0; t<slotArr.length; t++){
		var slot = slotArr[t];
		XmlString += "<SLOT SlotDeviceId='"+slot.SlotDeviceId+"' ProductNumber='"+slot.ProductNumber+"'";
		XmlString += " SlotName='"+slot.SlotName+"' ObjectPath='"+slot.ObjectPath+"' Number='"+slot.Number+"'";
		XmlString += " ModuleDescription='"+slot.ModuleDescription+"' SerialNumber='"+slot.SerialNumber+"' ModelType='"+slot.ModelType+"'";
		XmlString += " BoardType='"+slot.BoardType+"' SlotDevName='"+slot.SlotDevName+"' SlotId='"+slot.SlotId+"'";
		XmlString += " RedFlag='"+slot.RedFlag+"' UpdateFlag='"+slot.UpdateFlag+"'>";
		XmlString += getDeviceChild(slot);
		XmlString += " </SLOT>";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getModuleObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for module node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getModuleObject(moduleArr){
	var XmlString = "";
	for(var t=0; t<moduleArr.length; t++){
		var module = moduleArr[t];
		XmlString += "<MODULE ModuleId='"+module.ModuleId+"' ModuleResId='"+module.ModuleResId+"' ModuleSlotId='"+module.ModuleSlotId+"'";
		XmlString += " Number='"+module.Number+"' ModuleDescription='"+module.ModuleDescription+"' SerialNumber='"+module.SerialNumber+"'";
		XmlString += " ModuleName='"+module.ModuleName+"' ObjectPath='"+module.ObjectPath+"' ModuleDevName='"+module.ModuleDevName+"'";
		XmlString += " RedFlag='"+module.RedFlag+"' UpdateFlag='"+module.UpdateFlag+"'>";
		XmlString += getDeviceChild(module);
		XmlString += " </MODULE>";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getPicObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for pic node
 *  PARAMETERS    : dev,device
 *
 */
function getPicObject(picArr){
	var XmlString = "";
	for(var t=0; t<picArr.length; t++){
		var pic = picArr[t];
		XmlString += "<PIC PICId='"+pic.PICId+"' PICResId='"+pic.PICResId+"' PICSlotId='"+pic.PICSlotId+"' Version='"+pic.Version+"'";
		XmlString += " PartNumber='"+pic.PartNumber+"' Number='"+pic.Number+"' Description='"+pic.Description+"'";
		XmlString += " SerialNumber='"+pic.SerialNumber+"' JedecCode='"+pic.JedecCode+"' AssemblyVersion='"+pic.AssemblyVersion+"'";
		XmlString += " AssemblyFlags='"+pic.AssemblyFlags+"' AssemblyFlags='"+pic.AssemblyFlags+"' Date='"+pic.Date+"'";
		XmlString += " EepromVersion='"+pic.EepromVersion+"' PicName='"+pic.PicName+"' ObjectPath='"+pic.ObjectPath+"'";
		XmlString += " PicDevName='"+pic.PicDevName+"' RedFlag='"+pic.RedFlag+"' OrangeFlag='"+pic.OrangeFlag+"' UpdateFlag='"+pic.UpdateFlag+"'>";
		XmlString += getDeviceChild(pic);
		XmlString += " </PIC>";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getPortObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for port node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getPortObject(dev,device){
	var XmlString = "";
	for(var t=0; t<portArr.length; t++){
		var port = portArr[t];
		XmlString += "<PORT ObjectPath='"+port.ObjectPath+"' PortDevName='"+port.PortDevName+"' SwitchPortInfo='"+port.SwitchPortInfo+"' SwitchInfo='"+port.SwitchInfo+"'";
		XmlString += " VlanId='"+port.VlanId+"' VlanName='"+port.VlanName+"' PhysicalPortType='"+port.PhysicalPortType+"'";
		XmlString += " PortResId='"+port.PortResId+"' PortSlotId='"+port.PortSlotId+"' PortId='"+port.PortId+"'";
		XmlString += " Number='"+port.Number+"' PortName='"+port.PortName+"' UpdateFlag='"+port.UpdateFlag+"' PortFlag='"+port.PortFlag+"'";
		XmlString += " Availability='"+port.Availability+"' Type='"+port.Type+"' RedFlag='"+port.RedFlag+"' PartnerPort='"+port.PartnerPort+"'";
		XmlString += " Bandwidth='"+port.Bandwidth+"' Speed='"+port.Speed+"' EnablePort='"+port.EnablePort+"'";
		XmlString += " TunnelServicesPIC='"+port.TunnelServicesPIC+"' MultiServicesPIC='"+port.MultiServicesPIC+"' PortType='"+port.PortType+"'";
		XmlString += " PortCheck='"+port.PortCheck+"' PartnerPortDevice='"+port.PartnerPortDevice+"'";
		XmlString += " PartnerInformation='"+port.PartnerInformation+"' Description='"+port.Description+"' MediaType='"+port.MediaType+"'";
		XmlString += " AutoNegotiation='"+port.AutoNegotiation+"' Duplexity='"+port.Duplexity+"' PortConfig='"+port.PortConfig+"'";
		XmlString += " Phy='"+port.Phy+"' Spa='"+port.Spa+"' CarrierCard='"+port.CarrierCard+"'";
		XmlString += " PortCard='"+port.PortCard+"' EthMode='"+port.EthMode+"'";
		XmlString += " Speed2='"+port.Speed2+"' Sequence='"+port.Sequence+"' SaveConnectivity='"+port.SaveConnectivity+"'>";
		XmlString += getDeviceChild(port);
		XmlString += "</PORT>";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : getSubchannelObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for port node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getSubchannelObject(portArr){
	var XmlString = "";
	for(var t=0; t<portArr.length; t++){
		var port = portArr[t];
		XmlString += "<PORT ObjectPath='"+port.ObjectPath+"' PortDevName='"+port.PortDevName+"' SwitchPortInfo='"+port.SwitchPortInfo+"' SwitchInfo='"+port.SwitchInfo+"'";
		XmlString += " VlanId='"+port.VlanId+"' VlanName='"+port.VlanName+"' PhysicalPortType='"+port.PhysicalPortType+"'";
		XmlString += " PortResId='"+port.PortResId+"' PortSlotId='"+port.PortSlotId+"' PortId='"+port.PortId+"'";
		XmlString += " Number='"+port.Number+"' PortName='"+port.PortName+"' UpdateFlag='"+port.UpdateFlag+"' PortFlag='"+port.PortFlag+"'";
		XmlString += " Availability='"+port.Availability+"' Type='"+port.Type+"' RedFlag='"+port.RedFlag+"' PartnerPort='"+port.PartnerPort+"'";
		XmlString += " Bandwidth='"+port.Bandwidth+"' Speed='"+port.Speed+"' EnablePort='"+port.EnablePort+"'";
		XmlString += " TunnelServicesPIC='"+port.TunnelServicesPIC+"' MultiServicesPIC='"+port.MultiServicesPIC+"' PortType='"+port.PortType+"'";
		XmlString += " PortCheck='"+port.PortCheck+"' PartnerPortDevice='"+port.PartnerPortDevice+"'";
		XmlString += " PartnerInformation='"+port.PartnerInformation+"' Description='"+port.Description+"' MediaType='"+port.MediaType+"'";
		XmlString += " AutoNegotiation='"+port.AutoNegotiation+"' Duplexity='"+port.Duplexity+"' PortConfig='"+port.PortConfig+"'";
		XmlString += " Phy='"+port.Phy+"' Spa='"+port.Spa+"' CarrierCard='"+port.CarrierCard+"'";
		XmlString += " PortCard='"+port.PortCard+"' EthMode='"+port.EthMode+"'";
		XmlString += " Speed2='"+port.Speed2+"' Sequence='"+port.Sequence+"' SaveConnectivity='"+port.SaveConnectivity+"'>";
		XmlString += getDeviceChild(port);
		XmlString += "</PORT>";
	}
	return XmlString;
}

/*
 *
 *  FUNCTION NAME : getPortmapObject 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get xml data for portmap node
 *  PARAMETERS    : dev,device,XmlString 
 *
 */
function getPortmapObject(portmap){
	var XmlString = "";
	for(var t=0; t<portmap.length; t++){
		var link = portmap[t];
		XmlString += "<PORTMAP Source='"+link.Source+"' Id='"+link.Id+"' SrcIp='"+link.SrcIp+"' DstIp='"+link.DstIp+"'";
		XmlString += " Port1Id='"+link.Port1Id+"' Port2Id='"+link.Port2Id+"' Name='"+link.Name+"' Destination='"+link.Destination+"'";
		XmlString += " LinkName='"+link.LinkName+"' CheckConnectivity='"+link.CheckConnectivity+"' ConnectivityDone='"+link.ConnectivityDone+"'";
		XmlString += " SrcMonitorSlot='"+link.SrcMonitorSlot+"' DstMonitorSlot='"+link.DstMonitorSlot+"'";
		XmlString += " PortMonitorEnable='"+link.PortMonitorEnable+"' ConnectivityFlag='"+link.ConnectivityFlag+"'/>";
	}
	return XmlString;
}
/*
 *
 *  FUNCTION NAME : generateDevicePath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 13, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : generate object path for device
 *  PARAMETERS    : cnt 
 *
 */
function generateDevicePath(cnt){
	var devPath = "Device_" + cnt;
	if(idsArray.indexOf(devPath) != -1){
		cnt ++;
		devPath = generateDevicePath(cnt);
	}
	return devPath;
}
/*
 *
 *  FUNCTION NAME : checkPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get child of xml
 *  PARAMETERS    : path,myArray
 *
 */
function checkPath(path,myArray){
	var device;
	for(var s=0; s<myArray.length; s++){
		if(path == myArray[s].ObjectPath){
			device = myArray[s];
			s = myArray.length;
		}
	}
	return device;
}
/*
 *
 *  FUNCTION NAME : getModel 
 *  AUTHOR        : Ray Martinez
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get model 
 *  PARAMETERS    : device
 *
 */
function getModel(device) {
	var mod = device.Model;
	var ico = getModelImage(mod,false,true);
	var iconmodel = ico.src;
	return iconmodel
}
/*
 *
 *  FUNCTION NAME : checkValue 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 13, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : check null value
 *  PARAMETERS    : value 
 *
 */
function checkValue(value){
	if(value == "" || value == "null" || value == null || value == undefined){
		value = "";
	}
	return value;
}
/*
 *
 *  FUNCTION NAME : checkRackDevicePath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get rack of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkRackDevicePath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].RackDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkSlotDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get slot of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkSlotDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].SlotDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkModuleDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get module of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkModuleDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].ModuleDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkPicDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get pic of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkPicDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].PicDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : checkPortDevPath 
 *  AUTHOR        : Juvindle C Tina
 *  DATE          : December 6, 2013 
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : get port of device
 *  PARAMETERS    : path,myArray
 *
 */
function checkPortDevPath(path,myArray){
	var flag = false;
	for(var t=0; t<myArray.length; t++){
		if(myArray[t].PortDevName == path){
			flag = true;
			t = myArray.length;
		}
	}
	return flag;
}
/*
 *
 *  FUNCTION NAME : applyIPv4
 *  AUTHOR        : James Turingan
 *  DATE          : January 2, 2014
 *  MODIFIED BY   : 
 *  REVISION DATE : 
 *  REVISION #    : 
 *  DESCRIPTION   : 
 *  PARAMETERS    : 
 *
 */
function applyIPv4(){
	if(globalApplyAll == "deactive"){
		return
	}
	if(globalInfoType == "JSON"){
    	var devices = getDevicesNodeJSON();
   	}else{
    	var devices =devicesArr;
    }
	for(var i = 0; i < devices.length; i++){
		devip4vArr.push({
			EnablePing: "",
			RouterId: "",
			UnitId: "",
			PortId: "",
			LogicalIntId: "",
			RouterIdIncr: "",
			Name: "",
			ObjectPath: devices[i].ObjectPath + '.SubInt_1',
			DeviceCount:1,
			RedFlag: "",
			OrangeFlag: "",
	//IPV info
			Protocol:"interface_ipv4",
			IncrementGateway:"",
			NetMask: $('#netMask2').val(),
			IncrementIp:"",
			StartIp: $('#slIp').val(),
			StartGateway: "",
			CountIp: "",
			ProtoOrder: "",
			Enable:1,
			ipv4Name: devices[i].ObjectPath + ".SubInt_1.interface_ipv4_1",
			Id: "",
			Ipv4Id: "",
			ProtocolId: ""
		});
	}	

}
function storePortInDev(devPath){
	var dataArr = [];
	for(var i = 0; i < portArr2.length ;  i++){
		var path = portArr2[i].ObjectPath.split('.');
		if(devPath == path[0]){
			dataArr.push(portArr2[i]);
		}
	}
	return dataArr
}
